# 将URLHause数据转换为stix数据

```python
import re
import json
import requests
from stix2 import Indicator, ExternalReference,CustomObservable
from stix2 import ObservedData
from dateutil.parser import parse
from stix2 import URL
from stix2 import File


@CustomObservable('x-indicator', [
    ('name', str),
    ('description', str),
    ('pattern', str),
    ('pattern_type', str),
    ('labels', list),
    ('external_references', list)
])
class CustomIndicator():
    def __init__(self, name, description, pattern, pattern_type, labels, external_references):
        self.name = name
        self.description = description
        self.pattern = pattern
        self.pattern_type = pattern_type
        self.labels = labels
        self.external_references = external_references


def query_urlhaus(file_hash):
    # Validate file hash provided
    if re.search(r"^[A-Za-z0-9]{32}$", file_hash):
        hash_algo = 'md5_hash'
    elif re.search(r"^[A-Za-z0-9]{64}$", file_hash):
        hash_algo = 'sha256_hash'
    else:
        print("Invalid file hash provided")
        return
    
    # Construct the HTTP request
    data = {hash_algo: file_hash}
    response = requests.post('https://urlhaus-api.abuse.ch/v1/payload/', data)
    
    # Parse the response from the API
    json_response = response.json()
    print("获取URLHause数据成功！\n")
    if json_response['query_status'] == 'ok':
        # Convert to STIX format
        stix_objects = convert_to_stix(json_response)
        
        # Save STIX objects to a file
        with open('/root/Datafusion/ATT_CK/urlhaus_stix_objects.json', 'w') as f:
            json.dump(stix_objects, f, indent=4, sort_keys=False)
        print("STIX objects saved to 'urlhaus_stix_objects.json'")

    elif json_response['query_status'] == 'no_results':
        print("No results")
    else:
        print("Something went wrong")

def convert_to_stix(urlhaus_data):
    # Extract relevant data
    file_hash = urlhaus_data.get('sha256_hash', None)
    if not file_hash or not re.match(r"^[a-fA-F0-9]{64}$", file_hash):
        print("Invalid SHA-256 hash provided")
        return None

    signature = urlhaus_data.get('signature', 'Unknown')
    urlhaus_download = urlhaus_data.get('urlhaus_download', '')
    urls = urlhaus_data.get('urls', [])
    
     # Create Indicator object
    indicator = Indicator(
        labels=["malicious-activity"],
        pattern="[file:hashes.'SHA-256' = '{}']".format(file_hash),
        pattern_type="stix",
        external_references=[ExternalReference(
            source_name="URLhaus",
            description="URLhaus download link",
            url=urlhaus_download
        )]
    )

    # ...

    # Create URL objects
    url_objects = []
    for url_data in urls:
        first_seen = parse(url_data.get('firstseen', ''))
        last_seen = parse(url_data.get('lastseen', ''))
        url_object = ObservedData(
            first_observed=first_seen,
            last_observed=last_seen,
            number_observed=1,
            objects={
                "0": URL(value=url_data.get('url', '')),
                "1": File(hashes={'SHA-256': file_hash})
            }
        )
        url_objects.append(url_object)
    
    # Convert STIX objects to dictionaries
    stix_objects = [json.loads(indicator.serialize())] + [json.loads(obj.serialize()) for obj in url_objects]
    
    # Return the list of STIX objects
    return stix_objects
# 示例使用
query_urlhaus("d72ba95c67364911636a82f711732eb67e235bb31b17928e832228e847d25890")  # 用MD5哈希调用函数
```
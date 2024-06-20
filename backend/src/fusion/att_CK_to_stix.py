import json
import os
from stix2 import TAXIICollectionSource, Filter
from taxii2client.v20 import Collection
from itertools import chain
collections = {
    "enterprise_attack": "95ecc380-afe9-11e4-9b6c-751b66dd541e",
    "mobile_attack": "2f669986-b40b-4423-b720-4396ca6a462b",
    "ics-attack": "02c3ef24-9cd4-48f3-a99f-b74ce24f1d34"
}

collection = Collection(f"https://cti-taxii.mitre.org/stix/collections/{collections['enterprise_attack']}/")
src = TAXIICollectionSource(collection)

# Get all attack patterns
attack_patterns = list(chain.from_iterable(
        src.query(f) for f in [
            Filter("type", "=", "tool"), 
            Filter("type", "=", "malware")
        ]
    ))

# Convert the attack patterns to JSON
attack_patterns_json = [json.loads(ap.serialize()) for ap in attack_patterns]

# Save the JSON data to a file
file_path = '/root/Datafusion/ATT_CK/attack_patterns.json'
os.makedirs(os.path.dirname(file_path), exist_ok=True)
with open(file_path, 'w') as f:
    json.dump(attack_patterns_json, f, indent=4)

print("ATT&CK save to attack_patterns.json")
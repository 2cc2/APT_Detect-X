# BERT

```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import classification_report
from transformers import BertTokenizer, BertModel
import torch

# Load the datasets
labelled_data_path = 'kddcup_1_percent'
unlabelled_data_path = 'kddcup_1_percent.unlabeled'
except_path = 'kddcup_1_percent'

df_labelled = pd.read_csv(labelled_data_path, header=None)
df_unlabelled = pd.read_csv(unlabelled_data_path, header=None)
df_except = pd.read_csv(except_path, header=None)

# Define column names
columns = ["duration", "protocol_type", "service", "flag", "src_bytes", "dst_bytes", 
           "land", "wrong_fragment", "urgent", "hot", "num_failed_logins", 
           "logged_in", "num_compromised", "root_shell", "su_attempted", 
           "num_root", "num_file_creations", "num_shells", "num_access_files", 
           "num_outbound_cmds", "is_host_login", "is_guest_login", "count", 
           "srv_count", "serror_rate", "srv_serror_rate", "rerror_rate", 
           "srv_rerror_rate", "same_srv_rate", "diff_srv_rate", "srv_diff_host_rate", 
           "dst_host_count", "dst_host_srv_count", "dst_host_same_srv_rate", 
           "dst_host_diff_srv_rate", "dst_host_same_src_port_rate", 
           "dst_host_srv_diff_host_rate", "dst_host_serror_rate", 
           "dst_host_srv_serror_rate", "dst_host_rerror_rate", 
           "dst_host_srv_rerror_rate", "label"]

df_labelled.columns = columns
df_unlabelled.columns = columns[:-1]  # Unlabeled dataset doesn't have the label column
df_except.columns = columns

# Initialize the BERT tokenizer and model
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

# Function to encode text column using BERT
def encode_text_column(column):
    inputs = tokenizer(column.tolist(), padding=True, truncation=True, return_tensors="pt")
    with torch.no_grad():
        outputs = model(**inputs)
    return outputs.last_hidden_state[:, 0, :].numpy()  # Using [CLS] token's embedding

# Encode the categorical columns
encoded_protocol_type = encode_text_column(df_labelled['protocol_type'])
encoded_service = encode_text_column(df_labelled['service'])
encoded_flag = encode_text_column(df_labelled['flag'])

# Combine encoded categorical features with other features
df_labelled_encoded = np.hstack([
    df_labelled.drop(columns=['protocol_type', 'service', 'flag', 'label']).values, 
    encoded_protocol_type, 
    encoded_service, 
    encoded_flag
])

# Encode the label (1 for anomaly, 0 for normal)
df_labelled['label'] = df_labelled['label'].apply(lambda x: 1 if x != 'normal.' else 0)
labels = df_labelled['label'].values

# Standardize the numerical features
scaler = StandardScaler()
df_labelled_encoded = scaler.fit_transform(df_labelled_encoded)

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(df_labelled_encoded, labels, test_size=0.2, random_state=42)

# Train an SVM model
svm_model = SVC(kernel='linear', random_state=42)
svm_model.fit(X_train, y_train)

# Predict on the test set
y_pred = svm_model.predict(X_test)

# Evaluate the model
print(classification_report(y_test, y_pred))

# Optional: Predict on the exception dataset (if you want to see the model's performance on it)
encoded_protocol_type_except = encode_text_column(df_except['protocol_type'])
encoded_service_except = encode_text_column(df_except['service'])
encoded_flag_except = encode_text_column(df_except['flag'])

df_except_encoded = np.hstack([
    df_except.drop(columns=['protocol_type', 'service', 'flag', 'label']).values, 
    encoded_protocol_type_except, 
    encoded_service_except, 
    encoded_flag_except
])

df_except_encoded = scaler.transform(df_except_encoded)
y_except_pred = svm_model.predict(df_except_encoded)

df_except['predicted_label'] = y_except_pred
print(df_except[['label', 'predicted_label']].head())

```
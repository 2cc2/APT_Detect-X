# RF_SSAL_KDD算法

## 数据处理

- Cell 1

```python RF_SSAL_KDD_Processing.py
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import seaborn as sns
import warnings 

# 忽略特定的 UserWarning 警告
warnings.filterwarnings("ignore", message="Glyph .* missing from current font.")

# 替换为实际数据集路径
labelled_data_path = 'kddcup_1_percent'
unlabelled_data_path = 'kddcup_1_percent.unlabeled'
except_path = 'kddcup_1_percent'

# 读取有标签的数据集
df_labelled = pd.read_csv(labelled_data_path, header=None)

# 读取无标签的数据集
df_unlabelled = pd.read_csv(unlabelled_data_path, header=None)
df_except = pd.read_csv(except_path, header=None)

# 定义列名
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
df_unlabelled.columns = columns[:-1]  # 无标签数据集没有label列
df_except.columns = columns

# 获取分类特征的所有种类
categorical_columns = ["protocol_type", "service", "flag"]

# 为所有分类特征创建一个LabelEncoder对象
le_dict = {col: LabelEncoder() for col in categorical_columns}

# Fit LabelEncoder对象于有标签和无标签数据集中
for col in categorical_columns:
    le = le_dict[col]
    le.fit(pd.concat([df_labelled[col], df_unlabelled[col], df_except[col]]))

# 对有标签数据集进行编码
for col in categorical_columns:
    le = le_dict[col]
    df_labelled[col] = le.transform(df_labelled[col])

# 对无标签数据集进行编码
for col in categorical_columns:
    le = le_dict[col]
    df_unlabelled[col] = le.transform(df_unlabelled[col])

# 对df_except进行编码
for col in categorical_columns:
    le = le_dict[col]
    df_except[col] = le.transform(df_except[col])

# 将标签编码
df_labelled['label'] = df_labelled['label'].apply(lambda x: 1 if x != 'normal.' else 0)
df_except['label'] = df_except['label'].apply(lambda x: 1 if x != 'normal.' else 0)

# 特征标准化
scaler = StandardScaler()
df_labelled[df_labelled.columns[:-1]] = scaler.fit_transform(df_labelled[df_labelled.columns[:-1]])
df_unlabelled[df_unlabelled.columns] = scaler.transform(df_unlabelled[df_unlabelled.columns])
df_except[df_except.columns[:-1]] = scaler.transform(df_except[df_except.columns[:-1]])

# 划分有标签数据集的训练集和测试集
X = df_labelled.drop(columns=['label'])
y = df_labelled['label']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.99, random_state=42)

# 使用训练集中所有的有标签数据
X_train_labelled = X_train
y_train_labelled = y_train

# 无标签数据
X_train_unlabelled = df_unlabelled

# 处理后的df_except
X_except = df_except.drop(columns=['label'])
y_except = df_except['label']

# 显示数据集状态
print(f"Labelled Data Shape: {df_labelled.shape}")
print(f"Unlabelled Data Shape: {df_unlabelled.shape}")
print(f"Except Data Shape: {df_except.shape}")

# 显示分割后数据集的形状
print(f"X_train Labelled Shape: {X_train_labelled.shape}")
print(f"y_train Labelled Shape: {y_train_labelled.shape}")
print(f"X_test Shape: {X_test.shape}")
print(f"y_test Shape: {y_test.shape}")
print(f"X_except Shape: {X_except.shape}")
print(f"y_except Shape: {y_except.shape}")
```

## 数据标注

- Cell 1

```python RF_SSAL_KDD_Lable.py
# 步骤1: 导入必要的库
import numpy as np
import pandas as pd
from sklearn.metrics import accuracy_score, classification_report
from sklearn.ensemble import RandomForestClassifier
import warnings

warnings.filterwarnings("ignore")

# 步骤2: 初始模型训练
clf = RandomForestClassifier(random_state=42)
clf.fit(X_train_labelled, y_train_labelled)

# 步骤3: 自训练迭代
max_iterations = 10
confidence_threshold = 0.9
low_confidence_sample_size = 100

for iteration in range(max_iterations):
    y_unlabelled_pred = clf.predict(X_train_unlabelled)
    y_unlabelled_proba = clf.predict_proba(X_train_unlabelled)
    
    high_confidence_indices = np.where(np.max(y_unlabelled_proba, axis=1) >= confidence_threshold)[0]
    
    if len(high_confidence_indices) == 0:
        break
    
    X_high_confidence = X_train_unlabelled.iloc[high_confidence_indices]
    y_high_confidence = y_unlabelled_pred[high_confidence_indices]
    
    X_train_labelled = pd.concat([X_train_labelled, X_high_confidence])
    y_train_labelled = pd.concat([y_train_labelled, pd.Series(y_high_confidence)])

    X_train_unlabelled = X_train_unlabelled.drop(X_high_confidence.index)
    
    # 主动学习部分
    if len(X_train_unlabelled) < low_confidence_sample_size:
        low_confidence_sample_size = len(X_train_unlabelled)
    
    y_unlabelled_proba = clf.predict_proba(X_train_unlabelled)
    
    low_confidence_indices = np.argsort(np.max(y_unlabelled_proba, axis=1))[:low_confidence_sample_size]
    X_low_confidence = X_train_unlabelled.iloc[low_confidence_indices]
    
    # 重新计算低置信度样本的标签
    # 假设df_except是之前定义的包含所有可能标签的DataFrame
    X_low_confidence_features = X_low_confidence.reset_index(drop=True)
    y_low_confidence_labels = df_except[df_except.drop(columns=['label']).apply(tuple, axis=1).isin(X_low_confidence_features.apply(tuple, axis=1))]['label'].values
    
    if len(y_low_confidence_labels) < low_confidence_sample_size:
        print(f"Warning: Only found {len(y_low_confidence_labels)} labels for low confidence samples.")
        low_confidence_sample_size = len(y_low_confidence_labels)
        X_low_confidence = X_low_confidence.iloc[:low_confidence_sample_size]
    
    X_train_labelled = pd.concat([X_train_labelled, X_low_confidence])
    y_train_labelled = pd.concat([y_train_labelled, pd.Series(y_low_confidence_labels)])
    
    X_train_unlabelled = X_train_unlabelled.drop(X_low_confidence.index)
    
    clf.fit(X_train_labelled, y_train_labelled)

# 步骤4: 模型评估
y_pred = clf.predict(X_test)
y_pred_proba = clf.predict_proba(X_test)[:, 1]

print("Accuracy:", accuracy_score(y_test, y_pred))
print("Classification Report:")
print(classification_report(y_test, y_pred))
```
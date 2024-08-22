import os
from flask import Blueprint, Flask, request, jsonify
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
import warnings
from sklearn.metrics import accuracy_score, classification_report
import numpy as np
from sklearn.model_selection import StratifiedKFold, cross_val_score
import joblib
import json
import time
from werkzeug.utils import secure_filename

kdd_api = Blueprint('kdd_api', __name__)

# 忽略特定的 UserWarning 警告
warnings.filterwarnings("ignore", message="Glyph .* missing from current font.")

# 替换为实际数据集路径
labelled_data_path = 'src/data/kddcup_1_percent'
unlabelled_data_path = 'src/data/kddcup_1_percent.unlabeled'
except_path = 'src/data/kddcup_1_percent'

# 读取数据集
def load_data():
    df_labelled = pd.read_csv(labelled_data_path, header=None)
    df_unlabelled = pd.read_csv(unlabelled_data_path, header=None)
    df_except = pd.read_csv(except_path, header=None)
    return df_labelled, df_unlabelled, df_except

# 数据预处理
def preprocess_data(df_labelled, df_unlabelled, df_except):
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
               "dst_host_srv_serror_rate", "dst_host_rerror_rate", "dst_host_srv_rerror_rate", "label"]
    df_labelled.columns = columns
    df_unlabelled.columns = columns[:-1]  # 无标签数据集没有label列
    df_except.columns = columns
    categorical_columns = ["protocol_type", "service", "flag"]
    le_dict = {col: LabelEncoder() for col in categorical_columns}
    for col in categorical_columns:
        le = le_dict[col]
        le.fit(pd.concat([df_labelled[col], df_unlabelled[col], df_except[col]]))
    for col in categorical_columns:
        le = le_dict[col]
        df_labelled[col] = le.transform(df_labelled[col])
        df_unlabelled[col] = le.transform(df_unlabelled[col])
        df_except[col] = le.transform(df_except[col])
    df_labelled['label'] = df_labelled['label'].apply(lambda x: 1 if x != 'normal.' else 0)
    df_except['label'] = df_except['label'].apply(lambda x: 1 if x != 'normal.' else 0)
    scaler = StandardScaler()
    df_labelled[df_labelled.columns[:-1]] = scaler.fit_transform(df_labelled[df_labelled.columns[:-1]])
    df_unlabelled[df_unlabelled.columns] = scaler.transform(df_unlabelled[df_unlabelled.columns])
    df_except[df_except.columns[:-1]] = scaler.transform(df_except[df_except.columns[:-1]])
    return df_labelled, df_unlabelled, df_except

# 模型评估
def evaluate_model(clf, X_test, y_test, X_train, y_train):
    start_time = time.time()  

    y_pred = clf.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    classification_report_dict = classification_report(y_test, y_pred, output_dict=True)

    cv_scores = cross_val_score(clf, pd.concat([X_train, X_test]), pd.concat([y_train, y_test]), cv=5)
    avg_cv_score = np.mean(cv_scores)

    skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
    stratified_scores = []

    for train_index, test_index in skf.split(pd.concat([X_train, X_test]), pd.concat([y_train, y_test])):
        X_train_fold, X_test_fold = pd.concat([X_train, X_test]).iloc[train_index], pd.concat([X_train, X_test]).iloc[test_index]
        y_train_fold, y_test_fold = pd.concat([y_train, y_test]).iloc[train_index], pd.concat([y_train, y_test]).iloc[test_index]
        clf.fit(X_train_fold, y_train_fold)
        stratified_scores.append(clf.score(X_test_fold, y_test_fold))

    avg_stratified_score = np.mean(stratified_scores)

    end_time = time.time()  
    response_time = end_time - start_time  # 响应时间

    evaluation_results = {
        "accuracy": accuracy,
        "Classification Report": classification_report_dict,
        "cross_val_score": {
            "scores": cv_scores.tolist(),
            "average_score": avg_cv_score
        },
        "stratified_kfold": {
            "scores": stratified_scores,
            "average_score": avg_stratified_score
        },
        "response_time": response_time  # 响应时间
    }

    return evaluation_results

@kdd_api.route('/models', methods=['GET'])
def get_models():
    # 获取模型目录下的所有文件名
    files = os.listdir('src/model/kdd')
    # 只保留 .model 文件
    model_files = [f for f in files if f.endswith('.pkl')]
    return jsonify(model_files)

@kdd_api.route('/evaluate/<model_name>', methods=['GET'])
def evaluate_model_route(model_name):
    df_labelled, df_unlabelled, df_except = load_data()
    df_labelled, df_unlabelled, df_except = preprocess_data(df_labelled, df_unlabelled, df_except)
    print("数据预处理成功")

    X = df_labelled.drop(columns=['label'])
    y = df_labelled['label']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.99, random_state=42)

    model_name = model_name.replace('.json', '')
    model_path = f'src/model/kdd/{model_name}.pkl'
    clf = joblib.load(model_path)
    print(f"加载模型: {model_name}")
    evaluation_results = evaluate_model(clf, X_test, y_test, X_train, y_train)
    print("评估完成")

    return jsonify(evaluation_results)

@kdd_api.route('/upload', methods=['POST'])
def upload_model():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and file.filename.endswith('.pkl'):
        filename = secure_filename(file.filename)
        file_path = os.path.join('src/model/kdd', filename)
        file.save(file_path)  # 保存文件到指定路径

        # 读取保存的文件数据
        clf = joblib.load(file_path)
        df_labelled, df_unlabelled, df_except = load_data()
        df_labelled, df_unlabelled, df_except = preprocess_data(df_labelled, df_unlabelled, df_except)
        X = df_labelled.drop(columns=['label'])
        y = df_labelled['label']
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.99, random_state=42)
        evaluation_results = evaluate_model(clf, X_test, y_test, X_train, y_train)
        return jsonify(evaluation_results)
    else:
        return jsonify({'error': 'Invalid file type, only .pkl files are allowed'}), 400
    
@kdd_api.route('/uploads', methods=['POST'])
def upload_models():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and file.filename.endswith('.pkl'):
        # 直接读取文件数据
        clf = joblib.load(file)
        df_labelled, df_unlabelled, df_except = load_data()
        df_labelled, df_unlabelled, df_except = preprocess_data(df_labelled, df_unlabelled, df_except)
        X = df_labelled.drop(columns=['label'])
        y = df_labelled['label']
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.99, random_state=42)
        evaluation_results = evaluate_model(clf, X_test, y_test, X_train, y_train)
        return jsonify(evaluation_results)
    else:
        return jsonify({'error': 'Invalid file type, only .pkl files are allowed'}), 400
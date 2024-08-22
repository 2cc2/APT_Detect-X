from flask import Blueprint, Flask, request, jsonify
from sklearn.metrics import accuracy_score, classification_report
from sklearn.neighbors import KNeighborsClassifier
from loglizer import dataloader, preprocessing
import numpy as np
import pandas as pd
import joblib
import warnings
import os
import time

warnings.filterwarnings("ignore")

log_api = Blueprint('log_api', __name__)

struct_log = 'src/data/HDFS_100k.log_structured.csv'  # 结构化日志文件
label_file = 'src/data/anomaly_label.csv'  # 异常标签文件

def load_and_preprocess_data(train_ratio):
    (x_train, y_train), (x_test, y_test) = dataloader.load_HDFS(struct_log,
                                                                label_file=label_file,
                                                                window='session',
                                                                train_ratio=train_ratio,
                                                                split_type='uniform')

    feature_extractor = preprocessing.FeatureExtractor()
    x_train = feature_extractor.fit_transform(x_train, term_weighting='tf-idf')
    x_test = feature_extractor.transform(x_test)
    print("数据预处理成功")
    return x_train, y_train, x_test, y_test

def evaluates_model(model_path):
    start_time = time.time()  

    # 根据模型名称设置不同的 train_ratio
    if model_path.endswith('_S.pkl') or model_path.endswith('_SSAL.pkl'):
        train_ratio = 0.5
    elif model_path.endswith('_SS.pkl'):
        train_ratio = 0.1
    else:
        train_ratio = 0.5  # 默认值

    x_train, y_train, x_test, y_test = load_and_preprocess_data(train_ratio)
    model = joblib.load(model_path)
    y_pred = model.predict(x_test)
    accuracy = accuracy_score(y_test, y_pred)
    classification_report_dict = classification_report(y_test, y_pred, output_dict=True)

    end_time = time.time()  
    response_time = end_time - start_time  # 响应时间

    evaluation_results = {
        "accuracy": accuracy,
        "Classification Report": classification_report_dict,
        "response_time": response_time  
    }

    return evaluation_results

@log_api.route('/model', methods=['GET'])
def get_model():
    # 获取模型目录下的所有文件名
    files = os.listdir('src/model/log')
    # 只保留 .pkl 文件
    model_files = [f for f in files if f.endswith('.pkl')]
    return jsonify(model_files)

@log_api.route('/evaluates/<model_name>', methods=['GET'])
def evaluates(model_name):
    model_name = model_name.replace('.json', '')
    model_path = f'src/model/log/{model_name}.pkl'
    print(f"加载模型:log_{model_name}")
    evaluation_results = evaluates_model(model_path)
    print("评估完成")
    return jsonify(evaluation_results)
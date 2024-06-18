# api/data_api.py
import os
from flask import Blueprint, json, jsonify,send_file
from func.test import get_test_data, get_test_options

data_api = Blueprint('data_api', __name__)

@data_api.route('/test', methods=['GET'])
def test_data():
    data = get_test_data()  # 调用 get_test_data 函数获取数据
    return jsonify(data)  # 返回 JSON 格式的数据

@data_api.route('/options', methods=['GET'])
def options_data():
    options = get_test_options()  # 调用 get_test_options 函数获取配置选项
    return jsonify(options)  # 返回 JSON 格式的数据

@data_api.route('/csvdata', methods=['GET'])
def get_csv_data():
    return send_file('public/01.csv', mimetype='text/csv')

# 新的 API 接口，返回 results 目录下所有的 JSON 文件名
@data_api.route('/results', methods=['GET'])
def get_results1():
    # 获取 results 目录下的所有文件名
    files = os.listdir('src/kdd/results')
    # 只保留 .json 文件
    json_files = [f for f in files if f.endswith('.json')]
    return jsonify(json_files)

@data_api.route('/results/<filename>', methods=['GET'])
def get_result1(filename):
    # 拼接文件路径
    file_path = os.path.join('src/kdd/results', filename)
    # 读取文件内容
    with open(file_path, 'r') as f:
        data = json.load(f)
    return jsonify(data)


@data_api.route('/comparison', methods=['GET'])
def get_results2():
    # 获取 results 目录下的所有文件名
    files = os.listdir('src/log/results')
    # 只保留 .json 文件
    json_files = [f for f in files if f.endswith('.json')]
    return jsonify(json_files)

@data_api.route('/comparison/<filename>', methods=['GET'])
def get_result2(filename):
    # 拼接文件路径
    file_path = os.path.join('src/log/results', filename)
    # 读取文件内容
    with open(file_path, 'r') as f:
        data = json.load(f)
    return jsonify(data)
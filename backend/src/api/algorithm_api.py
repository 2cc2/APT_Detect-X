from flask import Blueprint, jsonify, request
import requests

algorithm_api = Blueprint('algorithm_api', __name__)

@algorithm_api.route('/execute', methods=['POST'])
def execute_code():
    code = request.json.get('code')  # 从请求中获取要执行的代码
    response = requests.post('http://localhost:8888/api/kernels', json={'code': code})  # 将代码发送到 Jupyter Kernel Gateway 执行
    return jsonify(response.json())  # 将执行结果返回给前端

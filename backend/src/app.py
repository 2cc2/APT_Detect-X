"""App."""

from flask_cors import CORS
from flask import Flask, jsonify

from api.test import get_test_data

app = Flask(__name__)
CORS(app)


@app.route('/api', methods=['GET'])
def api():
    return jsonify({
        'message': 'Hello from the API'
    })

@app.route('/api/test', methods=['GET'])  # 新的 API 接口
def test_api():
    data = get_test_data()  # 调用 get_test_data 函数获取数据
    return jsonify(data)  # 返回 JSON 格式的数据


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
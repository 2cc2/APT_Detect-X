"""App."""

from flask_cors import CORS
from flask import Flask

from api.data_api import data_api
from api.ml_api import ml_api

app = Flask(__name__)
CORS(app)

app.register_blueprint(data_api, url_prefix='/data')
app.register_blueprint(ml_api, url_prefix='/ml')



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

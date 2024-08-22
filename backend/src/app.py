"""App."""

from flask_cors import CORS
from flask import Flask

from api.data_api import data_api
from api.kdd_api import kdd_api
from api.log_api import log_api

app = Flask(__name__)

CORS(app)

app.register_blueprint(data_api, url_prefix='/data')
app.register_blueprint(kdd_api, url_prefix='/kdd')
app.register_blueprint(log_api, url_prefix='/log')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

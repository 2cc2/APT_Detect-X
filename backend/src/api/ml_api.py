from flask import Blueprint, jsonify, request, send_file
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import StandardScaler, LabelEncoder
# from sklearn.neighbors import KNeighborsClassifier
import pandas as pd

ml_api = Blueprint('ml_api', __name__)

@ml_api.route('/KNN_AL_KDD', methods=['GET'])  # 新增
def get_ipynb():
    return send_file('algorithm/KNN_AL_KDD.ipynb', mimetype='text/plain')


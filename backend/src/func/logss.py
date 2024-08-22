from sklearn.neighbors import KNeighborsClassifier
from loglizer import dataloader, preprocessing
import numpy as np
import pandas as pd
from sklearn.metrics import accuracy_score, classification_report
import warnings
import joblib

warnings.filterwarnings("ignore")

struct_log = '../data/HDFS_100k.log_structured.csv'  # 结构化日志文件
label_file = '../data/anomaly_label.csv'  # 异常标签文件
unlabel_struct_log = "../data/HDFS.npz"

if __name__ == '__main__':
    # 加载有标签的数据
    (x_train, y_train), (x_test, y_test) = dataloader.load_HDFS(struct_log,
                                                                label_file=label_file,
                                                                window='session',
                                                                train_ratio=0.1,
                                                                split_type='uniform')

    # 加载无标签的数据
    (un_x_train, _), _ = dataloader.load_HDFS(unlabel_struct_log,
                                              window='session',
                                              train_ratio=1.0,  # 使用所有无标签数据
                                              split_type='sequential',
                                              )
    # 随机选择1%的无标签数据
    sample_indices = np.random.choice(np.arange(len(un_x_train)), size=int(len(un_x_train) * 0.01), replace=False)
    un_x_train = un_x_train[sample_indices]
    feature_extractor = preprocessing.FeatureExtractor()
    x_train = feature_extractor.fit_transform(x_train, term_weighting='tf-idf')
    x_test = feature_extractor.transform(x_test)
    un_x_train = feature_extractor.transform(un_x_train)
  
    # 将数据转换为DataFrame，以便使用pandas的功能
    x_train = pd.DataFrame(x_train)
    y_train = pd.Series(y_train)
    x_test = pd.DataFrame(x_test)
    y_test = pd.Series(y_test)
    un_x_train = pd.DataFrame(un_x_train)

   # 加载模型
    model = joblib.load('../model/LR_SS.pkl')

     # Model evaluation
    y_pred = model.predict(x_test)
    print("Final Evaluation")
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Classification Report:")
    print(classification_report(y_test, y_pred))

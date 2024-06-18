# KNN_S_Log算法


```python 
from sklearn.metrics import accuracy_score, classification_report
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
from loglizer import dataloader, preprocessing
import numpy as np
import pandas as pd

struct_log = '/root/success/log/HDFS/HDFS_100k.log_structured.csv'  # 结构化日志文件
label_file = '/root/success/log/HDFS/anomaly_label.csv'  # 异常标签文件

if __name__ == '__main__':
    # 加载有标签的数据
    (x_train, y_train), (x_test, y_test) = dataloader.load_HDFS(struct_log,
                                                                label_file=label_file,
                                                                window='session',
                                                                train_ratio=0.5,
                                                                split_type='uniform')

    feature_extractor = preprocessing.FeatureExtractor()
    x_train = feature_extractor.fit_transform(x_train, term_weighting='tf-idf')
    x_test = feature_extractor.transform(x_test)

    # 初始化KNN分类器
    model = KNeighborsClassifier()

    # 使用交叉验证评估模型
    scores = cross_val_score(model, x_train, y_train, cv=5, scoring='accuracy')

    # 输出交叉验证结果
    print("Cross Validation Scores:", scores)
    print("Mean Accuracy:", np.mean(scores))

    # 训练模型
    model.fit(x_train, y_train)

    # 模型评估
    y_pred = model.predict(x_test)
    print("Final Evaluation")
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Classification Report:")
    print(classification_report(y_test, y_pred))

```
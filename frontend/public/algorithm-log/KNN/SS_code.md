# KNN_SS_Log算法


```python 
from sklearn.neighbors import KNeighborsClassifier
from loglizer import dataloader, preprocessing
import numpy as np
import pandas as pd
from sklearn.metrics import accuracy_score, classification_report
import warnings
warnings.filterwarnings("ignore")

struct_log = '/root/success/log/HDFS/HDFS_100k.log_structured.csv'  # 结构化日志文件
label_file = '/root/success/log/HDFS/anomaly_label.csv'  # 异常标签文件
unlabel_struct_log = "/root/success/log/HDFS/preprocessed/HDFS.npz"

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
                                              split_type='sequential')
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

    # 使用KNN模型进行初始训练
    model = KNeighborsClassifier()

    # 初始训练
    model.fit(x_train, y_train)

    max_iterations = 10
    confidence_threshold = 0.96

    for iteration in range(max_iterations):
        # 检查未标记数据集是否为空
        if un_x_train.empty:
            print(f"Iteration {iteration + 1}: No unlabeled data left. Stopping iteration.")
            break
        max_unlabeled_samples = int(len(un_x_train) * 0.2)
        # 使用模型对未标记数据进行预测，并获取置信度
        y_unlabelled_pred = model.predict(un_x_train)
        y_unlabelled_proba = np.max(model.predict_proba(un_x_train), axis=1)

        # 选择高置信度样本
        high_confidence_indices = np.where(y_unlabelled_proba >= confidence_threshold)[0]

        if len(high_confidence_indices) > max_unlabeled_samples:
            # 随机选择最多 max_unlabeled_samples 个
            high_confidence_indices = np.random.choice(high_confidence_indices, max_unlabeled_samples, replace=False)

        X_high_confidence = un_x_train.iloc[high_confidence_indices]
        y_high_confidence = y_unlabelled_pred[high_confidence_indices]

        # 将高置信度样本添加到有标签的训练集中
        x_train = pd.concat([x_train, X_high_confidence])
        y_train = pd.concat([y_train, pd.Series(y_high_confidence)])

        # 从无标签数据集中删除高置信度样本
        un_x_train = un_x_train.drop(X_high_confidence.index)

        print(f"Iteration {iteration + 1}: Added {len(high_confidence_indices)} high confidence samples to the training set.")

        # 重新训练模型
        model.fit(x_train, y_train)

     # Model evaluation
    y_pred = model.predict(x_test)
    print("Final Evaluation")
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Classification Report:")
    print(classification_report(y_test, y_pred))

```
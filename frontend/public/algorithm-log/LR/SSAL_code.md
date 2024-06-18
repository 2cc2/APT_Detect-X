# LR_SSAL_Log算法


```python
from sklearn.linear_model import LogisticRegression
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
                                                                train_ratio=0.5,
                                                                split_type='uniform')

    # 加载无标签的数据
    (un_x_train, un_y_train),_ = dataloader.load_HDFS(unlabel_struct_log,
                                                   window='session',
                                                   train_ratio=1.0,  # 使用所有无标签数据
                                                   split_type='sequential')

    # 随机选择1%的无标签数据
    sample_indices = np.random.choice(np.arange(len(un_x_train)), size=int(len(un_x_train) * 0.01), replace=False)
    un_x_train = un_x_train[sample_indices]
    un_y_train = un_y_train[sample_indices]

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
    un_y_train = pd.Series(un_y_train)

    # 初始模型训练
    model = LogisticRegression(random_state=42)
    model.fit(x_train, y_train)

    max_iterations = 10
    confidence_threshold = 0.95
    uncertainty_threshold = 0.9

    for iteration in range(max_iterations):
        # 检查未标记数据集是否为空
        if un_x_train.empty:
            print(f"Iteration {iteration + 1}: No unlabeled data left. Stopping iteration.")
            break

        # 使用模型对未标记数据进行预测，并获取置信度
        y_unlabelled_pred = model.predict(un_x_train)
        y_unlabelled_proba = model.predict_proba(un_x_train)

        # 选择高置信度样本
        high_confidence_indices = np.where(np.max(y_unlabelled_proba, axis=1) >= confidence_threshold)[0]
    
        # 限制添加到训练集的样本数量不超过当前无标签训练集的20%
        max_samples_to_add = int(len(un_x_train) * 0.2)
        high_confidence_indices = high_confidence_indices[:max_samples_to_add]

        X_high_confidence = un_x_train.iloc[high_confidence_indices]
        y_high_confidence = un_y_train.iloc[high_confidence_indices]

        # 将高置信度样本添加到有标签的训练集中
        x_train = pd.concat([x_train, X_high_confidence])
        y_train = pd.concat([y_train, y_high_confidence])

        # 从无标签数据集中删除高置信度样本
        un_x_train = un_x_train.drop(X_high_confidence.index)
        un_y_train = un_y_train.drop(y_high_confidence.index)

        print(f"Iteration {iteration + 1}: Added {len(high_confidence_indices)} high confidence samples to the training set.")

        # 主动学习部分
        # 获取当前模型对未标记数据的预测概率
        unlabelled_proba = model.predict_proba(un_x_train)
        max_proba = np.max(unlabelled_proba, axis=1)

        # 找到不确定度高的样本
        uncertain_indices = np.where(max_proba < uncertainty_threshold)[0]

        # 将一部分不确定度高的样本标记为有标签数据
        if len(uncertain_indices) > 0:
            uncertain_x = un_x_train.iloc[uncertain_indices]
            uncertain_y = un_y_train.iloc[uncertain_indices]

            # 添加到训练集
            x_train = pd.concat([x_train, uncertain_x])
            y_train = pd.concat([y_train, uncertain_y])

            # 从无标签数据中移除已标记的样本
            un_x_train = un_x_train.drop(uncertain_x.index)
            un_y_train = un_y_train.drop(uncertain_y.index)

        print(f"Iteration {iteration + 1}: Added {len(uncertain_indices)} uncertain samples to the training set.")

        # 重新训练模型
        model.fit(x_train, y_train)

    # 模型评估
    y_pred = model.predict(x_test)
    print("Final Evaluation")
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Classification Report:")
    print(classification_report(y_test, y_pred))

```
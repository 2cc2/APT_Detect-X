# LR_SS_Log算法


```python
from sklearn.linear_model import LogisticRegression
from loglizer import dataloader, preprocessing
import numpy as np
import pandas as pd
from sklearn.metrics import accuracy_score, classification_report
import warnings
warnings.filterwarnings("ignore")

struct_log = '/root/success/log/HDFS/HDFS_100k.log_structured.csv'  # Structured log file
label_file = '/root/success/log/HDFS/anomaly_label.csv'  # Anomaly label file
unlabel_struct_log = "/root/success/log/HDFS/preprocessed/HDFS.npz"

if __name__ == '__main__':
    # Load labeled data
    (x_train, y_train), (x_test, y_test) = dataloader.load_HDFS(struct_log,
                                                                label_file=label_file,
                                                                window='session',
                                                                train_ratio=0.1,
                                                                split_type='uniform')

    # Load unlabeled data
    (un_x_train, _), _ = dataloader.load_HDFS(unlabel_struct_log,
                                              window='session',
                                              train_ratio=1.0,  # Use all unlabeled data
                                              split_type='sequential')

    # Randomly select 1% of the unlabeled data
    sample_indices = np.random.choice(np.arange(len(un_x_train)), size=int(len(un_x_train) * 0.01), replace=False)
    un_x_train = un_x_train[sample_indices]

    # Feature extraction
    feature_extractor = preprocessing.FeatureExtractor()
    x_train = feature_extractor.fit_transform(x_train, term_weighting='tf-idf')
    x_test = feature_extractor.transform(x_test)
    un_x_train = feature_extractor.transform(un_x_train)

    # Convert data to DataFrame for easier manipulation
    x_train = pd.DataFrame(x_train)
    y_train = pd.Series(y_train)
    x_test = pd.DataFrame(x_test)
    y_test = pd.Series(y_test)
    un_x_train = pd.DataFrame(un_x_train)

    # Initialize Logistic Regression model
    model = LogisticRegression(random_state=54)

    # Initial training
    model.fit(x_train, y_train)

    max_iterations = 10
    confidence_threshold = 0.96

    for iteration in range(max_iterations):
        # Check if unlabeled dataset is empty
        if un_x_train.empty:
            print(f"Iteration {iteration + 1}: No unlabeled data left. Stopping iteration.")
            break
        max_unlabeled_samples = int(len(un_x_train) * 0.2)
        # Predict labels and obtain confidence scores for unlabeled data
        y_unlabelled_pred = model.predict(un_x_train)
        y_unlabelled_proba = np.max(model.predict_proba(un_x_train), axis=1)

        # Select samples with high confidence and meeting the threshold
        high_confidence_indices = np.where(y_unlabelled_proba >= confidence_threshold)[0]

        if len(high_confidence_indices) > max_unlabeled_samples:
            # Randomly select at most max_unlabeled_samples
            high_confidence_indices = np.random.choice(high_confidence_indices, max_unlabeled_samples, replace=False)

        X_high_confidence = un_x_train.iloc[high_confidence_indices]
        y_high_confidence = y_unlabelled_pred[high_confidence_indices]

        # Add high confidence samples to the labeled training set
        x_train = pd.concat([x_train, X_high_confidence])
        y_train = pd.concat([y_train, pd.Series(y_high_confidence)])

        # Remove high confidence samples from the unlabeled dataset
        un_x_train = un_x_train.drop(X_high_confidence.index)

        print(f"Iteration {iteration + 1}: Added {len(high_confidence_indices)} high confidence samples to the training set.")

        # Re-train the model
        model.fit(x_train, y_train)

    # Model evaluation
    y_pred = model.predict(x_test)
    print("Final Evaluation")
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Classification Report:")
    print(classification_report(y_test, y_pred))

```
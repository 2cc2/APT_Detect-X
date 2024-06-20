#  KDD CUP Dataset

> KDD Cup 1999数据集： 是KDD知识发现和数据挖掘会议的比赛数据集，主要为军事网络环境中模拟的多种入侵，是入侵检测应用的常用数据集，后续衍生出NSL-KDD。

**数据文件**包括：

- kddcup.names 功能列表。
- kddcup.data.gz 完整数据集（18M; 743M未压缩）
- kddcup.data_10_percent.gz 10％的数据集（2.1M; 75M未压缩）
- kddcup.newtestdata_10_percent_unlabeled.gz（1.4M; 45M未压缩）
- kddcup.testdata.unlabeled.gz （11.2M; 430M未压缩）
- kddcup.testdata.unlabeled_10_percent.gz （1.4M; 45M未压缩）
- corrected.gz 正确标签的测试数据
- training_attack_types 入侵类型列表
- typo-correction.txt 关于数据集中的简要说明 

1998年美国国防部高级规划署（DARPA）在MIT林肯实验室进行了一项入侵检测评估项目。林肯实验室建立了模拟美国空军局域网的一个网络环境，收集了9周时间的TCPdump()网络连接和系统审计数据，仿真各种用户类型、各种不同的网络流量和攻击手段，使它就像一个真实的网络环境。这些TCPdump采集的原始数据被分为两个部分：7周时间的训练数据，大概包含5,000,000多个网络连接记录，剩下的2周时间的测试数据大概包含2,000,000个网络连接记录。

- 4种**异常类型**分别是：
  - DOS（denial-of-service）拒绝服务攻击，例如ping-of-death, syn flood, smurf等
  - R2L（unauthorized access from a remote machine to a local machine）来自远程主机的未授权访问，例如guessing password
  - U2R（unauthorized access to local superuser privileges by a local unpivileged user）未授权的本地超级用户特权访问，例如buffer overflow attacks。
  - PROBING（surveillance and probing）端口监视或扫描，例如port-scan, ping-sweep等

> 随后来自哥伦比亚大学的Sal Stolfo 教授和来自北卡罗莱纳州立大学的 Wenke Lee 教授采用数据挖掘等技术对以上的数据集进行特征分析和数据预处理，形成了一个新的数据集。该数据集 用于1999年举行的KDD CUP竞赛中，成为著名的KDD99数据集。虽然年代有些久远，但KDD99数据集仍然是网络入侵检测领域的事实Benckmark，为基于计算智能的网络入侵检测研究奠定基础。

**数据分布**如下图所示：每个网络连接被标记为正常（normal）或异常（attack），异常类型被细分为4大类共39种攻击类型，其中22种攻击类型出现在训练集中，另有17种未知攻击类型出现在测试集中。

![](/DataProcessing/KDD/NSL-KDD.png)




 标签  |  类别	|  训练集（10%）|	测试集（Corrected）
-----|-----|-----|-----
-|39种攻击|-|-
0 |NORMAL	| 97278	| 60593
1	| PROBE	| 4107	| 4166
-|	ipsweep	| 1247	| 306
-|mscan|	/|	1053
-|nmap|	231|	84
-|portsweep	|1040	|354
-|saint|	/|	736
-|satan|	1589	|1633
2	|DOS	|391458	|229853
-|apache2	|/	|794
-|back	|2203	|1098
-|land|	21	|9
-|mailbomb|	/	|5000
-|neptune	|107201|	58001
-|pod	|264|	87
-|processtable|	/|	759
-|smurf	|280790	|164091
-|teardrop|	979|	12
-|udpstorm	|/	|2
3|	U2R	|52	|228
-|buffer_overflow|	30|	22
-|httptunnel	|/	|158
-|loadmodule|	9	|2
-|perl|	3	|2
-|ps	|/	|16
-|rootkit	|10	|13
-|sqlattack	|/	|2
-|xterm	|/|	13
4|	R2L	|1126	|16189
-|ftp_write	|8	|3
-|guess_passwd	|53	|4367
-|imap	|12|	1
-|multihop|	7	|18
-|named|	/|	17
-|phf|	4|	2
-|sendmail|	/	|17
-|snmpgetattack	|/|	7741
-|snmpguess|	/	|2406
-|spy|	2|	/
-|warezclient|	1020|	/
-|warezmaster|	20|	1602
-|worm	|/|	2
-|xlock	|/|	9
-|xsnoop|	/	|4


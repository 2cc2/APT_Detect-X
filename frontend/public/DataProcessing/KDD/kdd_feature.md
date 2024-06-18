# 数据特征描述

总共有42项特征，最后一列是标记特征（Label），其他前41项特征共分为四大类。

- TCP连接基本特征（共9种，序号1～9）
- TCP连接的内容特征（共13种，序号10～22）
- 基于时间的网络流量统计特征 （共9种，序号23～31）
- 基于主机的网络流量统计特征 （共10种，序号32～41）

> 0,tcp,http,SF,239,486,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,8,8,0.00,0.00,0.00,0.00,1.00,0.00,0.00,19,19,1.00,0.00,0.05,0.00,0.00,0.00,0.00,0.00,normal.
>0,icmp,ecr_i,SF,1032,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,511,511,0.00,0.00,0.00,0.00,1.00,0.00,0.00,255,255,1.00,0.00,1.00,0.00,0.00,0.00,0.00,0.00,smurf.
>0,tcp,private,S0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,13,1.00,1.00,0.00,0.00,0.25,0.10,0.00,255,13,0.05,0.07,0.00,0.00,1.00,1.00,0.00,0.00,neptune.

![](/DataProcessing/KDD/kdddata2.png)

接下来按顺序解释各个特征的具体含义，这是进行数据分析之前非常必要的一个环节。

## 1.TCP连接基本特征（共9种，序号1～9）

基本连接特征包含了一些连接的基本属性，如连续时间，协议类型，传送的字节数等。

![](/DataProcessing/KDD/kdddata3.png)
>Table 1:Basic features of individual TCP connections.

1) duration - 连接持续时间，以秒为单位，连续类型。范围是 [0, 58329] 。它的定义是从TCP连接以3次握手建立算起，到FIN/ACK连接结束为止的时间；若为UDP协议类型，则将每个UDP数据包作为一条连接。数据集中出现大量的duration = 0 的情况，是因为该条连接的持续时间不足1秒。

2) protocol_type - 协议类型，离散类型，共有3种：TCP, UDP, ICMP。

3) service - 目标主机的网络服务类型，离散类型，共有70种。’aol’, ‘auth’, ‘bgp’, ‘courier’, ‘csnet_ns’, ‘ctf’, ‘daytime’, ‘discard’, ‘domain’, ‘domain_u’, ‘echo’, ‘eco_i’, ‘ecr_i’, ‘efs’, ‘exec’, ‘finger’, ‘ftp’, ‘ftp_data’, ‘gopher’, ‘harvest’, ‘hostnames’, ‘http’, ‘http_2784′, ‘http_443′, ‘http_8001′, ‘imap4′, ‘IRC’, ‘iso_tsap’, ‘klogin’, ‘kshell’, ‘ldap’, ‘link’, ‘login’, ‘mtp’, ‘name’, ‘netbios_dgm’, ‘netbios_ns’, ‘netbios_ssn’, ‘netstat’, ‘nnsp’, ‘nntp’, ‘ntp_u’, ‘other’, ‘pm_dump’, ‘pop_2′, ‘pop_3′, ‘printer’, ‘private’, ‘red_i’, ‘remote_job’, ‘rje’, ‘shell’, ‘smtp’, ‘sql_net’, ‘ssh’, ‘sunrpc’, ‘supdup’, ‘systat’, ‘telnet’, ‘tftp_u’, ‘tim_i’, ‘time’, ‘urh_i’, ‘urp_i’, ‘uucp’, ‘uucp_path’, ‘vmnet’, ‘whois’, ‘X11′, ‘Z39_50′。

4) flag - 连接正常或错误的状态，离散类型，共11种。’OTH’, ‘REJ’, ‘RSTO’, ‘RSTOS0′, ‘RSTR’, ‘S0′, ‘S1′, ‘S2′, ‘S3′, ‘SF’, ‘SH’。它表示该连接是否按照协议要求开始或完成。例如SF表示连接正常建立并终止；S0表示只接到了SYN请求数据包，而没有后面的SYN/ACK。其中SF表示正常，其他10种都是error。

5) src_bytes - 从源主机到目标主机的数据的字节数，连续类型，范围是 [0, 1379963888]。

6) dst_bytes - 从目标主机到源主机的数据的字节数，连续类型，范围是 [0. 1309937401]。

7) land - 若连接来自/送达同一个主机/端口则为1，否则为0，离散类型，0或1。

8) wrong_fragment - 错误分段的数量，连续类型，范围是 [0, 3]。

9) urgent - 加急包的个数，连续类型，范围是[0, 14]。

## 2.TCP连接的内容特征（共13种，序号10～22）

第二部分特征是TCP连接的内容特征，共13种。对于U2R和R2L之类的攻击，由于它们不像DoS攻击那样在数据记录中具有频繁序列模式，而一般都是嵌入在数据包的数据负载里面，单一的数据包和正常连接没有什么区别。为了检测这类攻击，Wenke Lee等从数据内容里面抽取了部分可能反映入侵行为的内容特征，如登录失败的次数等。

![](/DataProcessing/KDD/kdddata4.png)
>Table 2: Content features within a connection suggested by domain knowledge.

10)  hot - 访问系统敏感文件和目录的次数，连续，范围是 [0, 101]。例如访问系统目录，建立或执行程序等。
11)  num_failed_logins - 登录尝试失败的次数。连续，[0, 5]。
12)  logged_in - 成功登录则为1，否则为0，离散，0或1。
13)  num_compromised - compromised条件出现的次数，连续，[0, 7479]。
14) root_shell - 若获得root shell 则为1，否则为0，离散，0或1。root_shell是指获得超级用户权限。
15) su_attempted - 若出现”su root” 命令则为1，否则为0，离散，0或1。
16) num_root - root用户访问次数，连续，[0, 7468]。
17) num_file_creations - 文件创建操作的次数，连续，[0, 100]。
18) num_shells - 使用shell命令的次数，连续，[0, 5]。
19) num_access_files - 访问控制文件的次数，连续，[0, 9]。例如对 /etc/passwd 或 .rhosts 文件的访问。
20) num_outbound_cmds - 一个FTP会话中出站连接的次数，连续，0。数据集中这一特征出现次数为0。
21) is_hot_login - 登录是否属于“hot”列表，是为1，否则为0，离散，0或1。例如超级用户或管理员登录。
22) is_guest_login - 若是guest 登录则为1，否则为0，离散，0或1。

## 3.基于时间的网络流量统计特征 （共9种，序号23～31）

第三类特征是基于时间的网络流量统计特征。包括相同目标主机和相同服务。

![](/DataProcessing/KDD/kdddata5.png)
>Table 3: Traffic features computed using a two-second time window.

由于网络攻击事件在时间上有很强的关联性，因此统计出当前连接记录与之前一段时间内的连接记录之间存在的某些联系，可以更好的反映连接之间的关系。这类特征又分为两种集合：

- 一个是 “same host”特征，只观察在过去两秒内与当前连接有 相同目标主机 的连接，例如相同的连接数，在这些相同连接与当前连接有相同的服务的连接等等；
- 另一个是 “same service”特征，只观察过去两秒内与当前连接有 相同服务 的连接，例如这样的连接有多少个，其中有多少出现SYN错误或者REJ错误。

具体翻译内容如下：

23)  count - 过去两秒内，与当前连接具有相同的目标主机的连接数，连续，[0, 511]。
24)  srv_count - 过去两秒内，与当前连接具有相同服务的连接数，连续，[0, 511]。
25) serror_rate - 过去两秒内，在与当前连接具有相同目标主机的连接中，出现“SYN” 错误的连接的百分比，连续，[0.00, 1.00]。
26) srv_serror_rate - 过去两秒内，在与当前连接具有相同服务的连接中，出现“SYN” 错误的连接的百分比，连续，[0.00, 1.00]。
27) rerror_rate - 过去两秒内，在与当前连接具有相同目标主机的连接中，出现“REJ” 错误的连接的百分比，连续，[0.00, 1.00]。
28) srv_rerror_rate - 过去两秒内，在与当前连接具有相同服务的连接中，出现“REJ” 错误的连接的百分比，连续，[0.00, 1.00]。
29) same_srv_rate - 过去两秒内，在与当前连接具有相同目标主机的连接中，与当前连接具有相同服务的连接的百分比，连续，[0.00, 1.00]。
30) diff_srv_rate - 过去两秒内，在与当前连接具有相同目标主机的连接中，与当前连接具有不同服务的连接的百分比，连续，[0.00, 1.00]。
31) srv_diff_host_rate - 过去两秒内，在与当前连接具有相同服务的连接中，与当前连接具有不同目标主机的连接的百分比，连续，[0.00, 1.00]。

>注意：这一大类特征中，23、25、27、29、30这5个特征是 “same host” 特征，前提都是与当前连接具有相同目标主机的连接；24、26、28、31这4个特征是 “same service” 特征，前提都是与当前连接具有相同服务的连接。

## 4.基于主机的网络流量统计特征 （共10种，序号32～41）

基于时间的流量统计只是在过去两秒的范围内统计与当前连接之间的关系，而在实际入侵中，有些 Probing攻击使用慢速攻击模式来扫描主机或端口，当它们扫描的频率大于2秒的时候，基于时间的统计方法就无法从数据中找到关联。所以Wenke Lee等按照目标主机进行分类，使用一个具有100个连接的时间窗，统计当前连接之前100个连接记录中与当前连接具有 相同目标主机 的统计信息。

32) dst_host_count - 前100个连接中，与当前连接具有相同目标主机的连接数，连续，[0, 255]。
33) dst_host_srv_count - 前100个连接中，与当前连接具有相同目标主机相同服务的连接数，连续，[0, 255]。
34) dst_host_same_srv_rate - 前100个连接中，与当前连接具有相同目标主机相同服务的连接所占的百分比，连续，[0.00, 1.00]。
35) dst_host_diff_srv_rate - 前100个连接中，与当前连接具有相同目标主机不同服务的连接所占的百分比，连续，[0.00, 1.00]。
36) dst_host_same_src_port_rate - 前100个连接中，与当前连接具有相同目标主机相同源端口的连接所占的百分比，连续，[0.00, 1.00]。
37) dst_host_srv_diff_host_rate - 前100个连接中，与当前连接具有相同目标主机相同服务的连接中，与当前连接具有不同源主机的连接所占的百分比，连续，[0.00, 1.00]。
38) dst_host_serror_rate - 前100个连接中，与当前连接具有相同目标主机的连接中，出现SYN错误的连接所占的百分比，连续，[0.00, 1.00]。
39) dst_host_srv_serror_rate - 前100个连接中，与当前连接具有相同目标主机相同服务的连接中，出现SYN错误的连接所占的百分比，连续，[0.00, 1.00]。
40) dst_host_rerror_rate - 前100个连接中，与当前连接具有相同目标主机的连接中，出现REJ错误的连接所占的百分比，连续，[0.00, 1.00]。
41) dst_host_srv_rerror_rate - 前100个连接中，与当前连接具有相同目标主机相同服务的连接中，出现REJ错误的连接所占的百分比，连续，[0.00, 1.00]。

## 5.样本分析

KDD99数据集总共由500万条记录构成，它还提供一个10%的训练子集和测试子集，它的样本类别分布如下：

- NORMAL：正常访问，训练集（10%）有97278个样本，测试集（Corrected）有60593个样本。

- PROBE： 端口监视或扫描，训练集（10%）有4107个样本，测试集（Corrected）有4166个样本。攻击包括： ipsweep、 mscan、nmap、portsweep、saint、satan。
  
- DOS：拒绝服务攻击，训练集（10%）有391458个样本，测试集（Corrected）有229853个样本。攻击包括： apache2、back、land、mailbomb、neptune、pod、processtable、smurf、teardrop、udpstorm。
  
- U2R：未授权的本地超级用户特权访问，训练集（10%）有52个样本，测试集（Corrected）有228个样本。攻击包括：buffer_overflow、httptunnel、loadmodule、perl、ps、rootkit、sqlattack、 xterm。
  
- R2L：来自远程主机的未授权访问，训练集（10%）有1126个样本，测试集（Corrected）有16189个样本。攻击包括：ftp_write、guess_passwd、imap、multihop、named、phf、sendmail、snmpgetattack、snmpguess、spy、warezclient、warezmaster、worm、xlock、xsnoop。

具体的数据描述如下：

>KDDTrain+.ARFF: The full NSL-KDD train set with binary labels in ARFF format
>KDDTrain+.TXT: The full NSL-KDD train set including attack-type labels and difficulty level in Csv format
>KDDTrain+ 20Percent.ARFF: A 20% subset of the KDDTrain+.arff file
>KDDTrain+ 20Percent.TXT:A 20% subset of the KDDTrain+.txt file
>KDDTest+.ARFF: The full NSL-KDD test set with binary labels in ARFF format
>KDDTest+.TXT: The full NSL-KDD test set including attack-type labels and difficulty level in Csv format
>KDDTest-21.ARFF: A subset of the KDDTest+.arf file which does not include records with dificulty level of 21 out of 21
>KDDTest-21.TXT: A subset of the KDDTest+.txt file which does not include records with difficulty level of 21 out of 21




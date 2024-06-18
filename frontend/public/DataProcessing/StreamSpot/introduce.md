# StreamSpot数据集

- StreamSpot数据集中一共包含 6 个场景，其中 5 个正常行为，包括看 YouTube视频、检测邮件等，以及一个攻击行为。攻击场景是从一个恶意 URL下载程序并利用一个闪存漏洞获取系统管理员权限。该数据集收集过程中，每个场景运行了 100 次，并使用 SystemTap 记录信息。

## Format

制表符分隔文件，每行一条边

```
source-id	source-type	destination-id	destination-type	edge-type	graph-id
```

graph-id 对应于如下：

>YouTube (graph ID's 0 - 99)

>GMail (graph ID's 100 - 199)

>VGame (graph ID's 200 - 299)

>Drive-by-download attack (graph ID's 300 - 399)

>Download (graph ID's 400 - 499)

>CNN (graph ID's 500 - 599)
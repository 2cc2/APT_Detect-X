'use client';
import { Breadcrumb, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined } from '@ant-design/icons';
import { Footer } from '@/components/footer&hernav/Footer';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import Loading from '@/components/loading/loading';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';


const { TabPane } = Tabs;

export const Learn = () => {
    return (
        <div className="h-full lg:px-6">
            <div className="flex flex-col gap-5 grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-4  w-full">
                <Card className="xl:max-w-sm bg-blue-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">自训练</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            self-training是最简单的半监督方法之一，其主要思想是找到一种方法，
                            用未标记的数据集来扩充已标记的数据集。即首先用有标签数据训练一个分类器，
                            然后用这个分类器对无标签数据进行分类，这样就会产生伪标签（pseudo label）
                            或软标签（soft label），挑选一定标准的伪标签样本用来迭代训练分类器。
                        </p>
                        <img src="/algorithm-introduce/knn4.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-green-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">使用场景</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            在现实生活中得到大量有标签数据需要大量时间经历，
                            而自训练是有标签数据+无标签数据混合成的训练数据中使用的深度学习算法，
                            可以利用自训练方法对无标记数据进行标记，实现己标记数据的扩充。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-red-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">自训练优点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            自训练可扩展性、通用性和灵活性，
                            在每种条件设置下均能很好地发挥作用，
                            无论是少数据状态、多数据状态、弱数据增强还是强数据增强。
                            并且自训练不依赖于模型架构也不依赖于数据集
                        </p>

                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-yellow-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">自训练缺点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            受标记样本分布和数量的限制，很难有效地发现高置信度无标记样本，
                            虽然目前已有较多半监督自训练算法，但这些算法所使用的基分类器都有自身的弱点，
                            自训练一般需要有标注样本与无标签样本的性质差异不能太大，
                            并且需要迭代多次，且几乎所有的发现高置信度无标记样本的方法都需要排序置信度值，
                            排序过程增加了计算时间，所以计算时间会较长。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-indigo-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">半监督学习</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            机器学习算法通常分为监督学习和无监督学习两大类。
                            监督学习算法需要训练数据集中包含标记的输入输出对，
                            而无监督学习算法则是在没有任何标签信息的情况下寻找数据中的内在结构和模式。
                        </p>
                        <img src="/algorithm-introduce/knn5.png" alt="description" />
                        <p>
                            半监督学习是介于这两种学习方式之间的一种新兴的机器学习范式。
                            它利用少量标记数据和大量无标记数据来训练模型，
                            相比完全监督学习能够取得更好的性能。
                            现实世界中获取尿技术局往往需要大量的人工标注工作，
                            代价极高半监督学习在很多实际应用中都有广泛应用，
                            比如图像分类、自然语言处理、生物信息学等领域。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">基于传播的半监KNN</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            算法使用已标记的样本来传播标签给未标记的样本。
                            算法首先构建一个图，其中节点代表数据点，边代表样本之间的相似性，
                            通过图的传播规则（如label propagation）或优化问题，
                            标签可以从已标记的节点传播到未标记的节点。
                            这种方法适用于标签传播成本较低，
                            即判断两个样本是否属于同一类别较为简单的情况。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">基于聚类的半监督KNN</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            算法首先对未标记的样本进行聚类。
                            每个聚类中心代表该类未标记样本的平均标签。
                            然后，算法使用已标记的样本来为这些聚类中心“投票”，
                            从而为每个聚类分配一个标签，最终使用这些聚类标签来预测未标记样本的类别。
                            这种方法适用于聚类中心能够很好地代表未标记样本的情况。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">监督学习</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            针对有监督的学习任务，存在标记成本较为昂贵且标记难以大量获取的问题。
                            在此问题背景下，主动学习（Active Learning, AL）
                            尝试通过选择性的标记较少数据而训练出表现较好的模型。
                        </p>
                        <img src="/algorithm-introduce/lr4.png" alt="description" />
                        <p>
                            例如，此时我们有大量的猫和狗的数据，
                            假设人为标记他们的类别是成本非常高的事情，
                            这时需要用到主动学习从中挑选部分数据对他们进行标注以节约成本，
                            用主动模型选取出的标注数据训练的模型比随机选取出的相同数量的标注数据训练的模型精度更高。
                        </p>
                        <img src="/algorithm-introduce/lr5.png" alt="description" />
                        <p>
                            如图所示，图(a)是全部数据集，
                            图（c）中使用主动学习策略仅选取30个样本训练出的逻辑回归模型即可达到90%的准确率，
                            而图(b)中随机选取的30个样本训练出的模型却相对表现较差。
                        </p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

const Layout = ({ children }: any) => (
    <div>
        <div style={{ flex: '1 0 auto' }}>
            <HorizontalNav />
        </div>
        <div className="flex">
            <SidebarWrapper />
            <div className="flex-grow" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                {children}
            </div>
        </div>
    </div>
);

const TopNavbar = ({ setCurrentPage }: any) => {
    return (
        <div className="flex justify-between p-2 bg-gray-600" >
            <Breadcrumb className="breadcrumb-white">
                <Breadcrumb.Item>
                    <a href="/dashboard" style={{ color: 'white' }}>
                        <HomeOutlined />
                        <span>首页</span>
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/dataset/KDD" onClick={() => setCurrentPage('dataset')} style={{ color: 'white' }}>
                        数据集
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/algorithm/KNN" onClick={() => setCurrentPage('algorithm')} style={{ color: 'white' }}>
                        检测算法
                    </a>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

const Learn_more = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // 模拟数据加载过程
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // 假设数据加载需要1.5秒
        // 清理定时器
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Layout>
                    <div>
                        <TopNavbar />
                            <Card1 />
                            <Card2 />
                            <Card3 />
                            <Card4 />
                            <Card5 />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%', }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Learn_more;


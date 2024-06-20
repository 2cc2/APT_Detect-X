'use client';
import { Breadcrumb, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined } from '@ant-design/icons';
import { Footer } from '@/components/footer&hernav/Footer';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import Loading from '@/components/loading/loading';
// import MathJax from '@matejmazur/react-mathjax';


const { TabPane } = Tabs;

export const Introduce_lr = () => {
    return (
        <div className="h-full lg:px-6">
            <div className="flex flex-col gap-5 grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-4  w-full">
                <Card className="xl:max-w-sm bg-blue-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">逻辑回归模型</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            逻辑回归主要用于二分类问题,属于线性分类器（线性模型），
                            先用wx+b作为综合值的评估，再套用sigmoid函数将综合评估值转为概率。
                            其输出是一个概率值，通常使用sigmoid函数（逻辑函数）将线性预测值映射到0和1之间。
                        </p>
                        <p>
                            逻辑回归的决策边界是通过设定一个阈值（通常为0.5）来将概率值映射到类别标签上。
                            如果预测概率大于0.5，则分类为1，否则分类为0。
                            在单变量时，逻辑回归模型的决策边界是一条S曲线，
                            其中，w控制了它的拉伸，b则控制了它的平移位置：
                        </p>
                        <img src="/algorithm-introduce/lr1.png" alt="description" />
                        <p>
                            类似地，在两个变量时，模型是一个S面，在更多变量时，则是一个超S面。
                        </p>
                        <p>
                            逻辑回归损失函数用于求取模型里的参数w和b，也称最大似然损失函数，设计整体思路为：
                        </p>
                        <img src="/algorithm-introduce/lr2.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-green-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">逻辑回归模型优点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            1.简洁且易于理解，逻辑回归的数学模型简单，易于解释和实现。
                        </p>
                        <p>
                            2.计算效率高：对于大规模数据集，逻辑回归通常表现良好，并且计算效率较高。
                        </p>
                        <p>
                            3.适用于线性可分问题：逻辑回归适用于线性可分或近似线性可分的数据。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-red-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">逻辑回归模型缺点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <img src="/algorithm-introduce/knn2.png" alt="description" />
                        <p>
                            1.只能处理线性关系：逻辑回归模型只能捕捉到特征之间的线性关系，
                            对于非线性关系的建模能力较弱。
                        </p>
                        <p>
                            2.对异常值敏感：逻辑回归模型对异常值比较敏感，异常值可能会影响模型的性能。
                        </p>
                        <p>
                            3.需要特征缩放：虽然逻辑回归对特征缩放要求不是很高，
                            但在某些情况下，特征缩放可以提高模型性能。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-yellow-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">逻辑回归算法伪代码</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <img src="/algorithm-introduce/lr6.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-indigo-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">伪代码</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <img src="/algorithm-introduce/knn6.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-purple-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">LR_AL算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            实现了采用主动学习策略的逻辑回归模型，在训练过程中动态选择性地添加标签样本以优化模型。
                        </p>
                        <p>
                            方法适用于样本标签不易获取，或者获取标签代价较高的场景。
                            通过主动学习，模型可以在有限的标签样本上学习到更好的分类边界。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">LR_SS算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            实现带有正则化的逻辑回归模型，使用了正则化技术来防止过拟合。
                        </p>
                        <p>
                            方法适用于特征较多，且部分特征可能存在线性关系的情况。
                            正则化可以帮助模型泛化能力更强，减少过拟合的风险。
                        </p>
                        <p>
                            主要思想：保留所有的特征变量，
                            因为我们不太清楚要舍掉哪个特征变量，并且又想尽可能保留信息。
                            所以我们只能是惩罚所有变量，让每个特征变量对结果的影响值变小，
                            这样的话你拟合出来的模型才会更光滑更简单，从而减少过拟合的可能性。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">LR_SSAL算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            实现了半监督学习策略的逻辑回归模型，结合了有标签和无标签的数据来训练模型。
                        </p>
                        <p>
                            方法适用于标签数量有限，但拥有大量无标签数据的情况。
                            通过利用无标签数据中的信息，模型可以提高分类的准确性和泛化能力。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">LR_SSAL算法优缺点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            结合了主动学习和半监督学习的优点，
                            通过查询高置信度样本和标注低置信度样本来提高模型性能，
                            既考虑了模型的不确定性，又使用了无标签数据，
                            并且包含了详细的迭代过程，可以逐步从无标签数据中学习。
                            但代码相对较长和复杂，不如LR_S_KDD直观，
                            需要用户指定多个超参数，在实际应用中可能难以实现，
                            并且需要监控low_confidence_sample_size的选择。
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
            <div className="flex-grow">
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
                    <a href="/dataset" onClick={() => setCurrentPage('dataset')} style={{ color: 'white' }}>
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

const Algorithm_lrin = () => {
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
                        <Introduce_lr />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Algorithm_lrin;


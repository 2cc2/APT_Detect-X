'use client';
import { Breadcrumb} from 'antd';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined } from '@ant-design/icons';
import { Footer } from '@/components/footer&hernav/Footer';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import Loading from '@/components/loading/loading';

export const Introduce_svm = () => {
    return (
        <div className="h-full lg:px-6">
            <div className="flex flex-col gap-5 grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-4  w-full">
                <Card className="xl:max-w-sm bg-blue-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">支持向量机算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            支持向量分类SVC（Support Vector Classification）
                            作为支持向量机（Support Vector Machine，SVM）的一种应用，
                            是一种强大的监督学习算法，用于解决分类问题。
                            支持向量机是一种强大的监督学习算法，广泛应用于数据分类和回归任务。
                            SCV的核心思想是在数据集中找到一个最优的超平面，
                            以最大化不同类别之间的间隔，从而实现高效的分类，
                            分为硬间隔分类和软间隔分类，
                            其中距离分类决策面最近的样本点称为支持向量
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-green-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">SVM_AL算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            实现基于主动学习的支持向量机（SVM）模型。
                            初始化一个SVM模型，用已标签的数据对模型进行训练。
                            接下来，进行了主动学习的迭代。在每次迭代中，模型首先检查无标签数据是否为空，
                            如果为空，则停止迭代。然后，模型使用当前的模型预测无标签数据的概率，
                            并计算不确定性，这里使用的是预测概率最接近0.5的样本。
                            然后，选择不确定性最高的样本，并从另一个数据集中获取这些样本的标签。
                            然后，将这些样本及其标签添加到已标签的数据集中，并从无标签数据集中删除这些样本。
                            最后，使用新的已标签数据集重新训练模型。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-yellow-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">SVM_SS算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            实现基于半监督学习的支持向量机（SVM）模型。
                            初始化一个SVM模型，用已标签的数据对模型进行训练。
                            接下来，进行了半监督学习的迭代。
                            在每次迭代中，模型首先使用当前的模型预测无标签数据的概率，并选择出预测概率高于设定阈值的样本。
                            然后，将这些高置信度的样本及其预测标签添加到已标签的数据集中，
                            并从无标签数据集中删除这些样本。最后，使用新的已标签数据集重新训练模型。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-red-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">SVM_SSAL算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            实现基于主动半监督学习的支持向量机（SVM）模型。
                            初始化一个SVM模型，用已标签的数据对模型进行训练。
                            接下来，进行了主动学习的迭代。在每次迭代中，
                            模型首先使用当前的模型预测无标签数据的概率，
                            并选择出预测概率高于设定阈值的样本，
                            将这些高置信度的样本及其预测标签添加到已标签的数据集中，
                            并从无标签数据集中删除这些样本。
                            然后，模型重新计算无标签样本的预测概率，
                            并选择出预测概率最低的样本，从另一个数据集中获取这些样本的标签，
                            将这些低置信度的样本及其标签添加到已标签的数据集中，
                            并从无标签数据集中删除这些样本。
                            最后，使用新的已标签数据集重新训练模型。
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

const Algorithm_svmin = () => {
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
                        <Introduce_svm />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Algorithm_svmin;


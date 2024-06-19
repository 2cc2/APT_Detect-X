'use client';
import { Breadcrumb, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined } from '@ant-design/icons';
import { Footer } from '@/components/footer&hernav/Footer';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import Loading from '@/components/loading/loading';


const { TabPane } = Tabs;

export const Introduce_rf = () => {
    return (
        <div className="h-full lg:px-6">
            <div className="flex flex-col gap-5 grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-4  w-full">
                <Card className="xl:max-w-sm bg-blue-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">随机森林算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            随机森林分类器是一种基于集成学习的分类模型，
                            它通过组合多个决策树来提高分类性能。
                            在随机森林中，每个决策树都是独立构建的，
                            使用随机选择的特征和样本进行训练，
                            最终将每个决策树的分类结果进行投票，得到最终的分类结果。
                        </p>
                        <img src="/algorithm-introduce/rf1.png" alt="description" />
                        <p>
                            构建过程包括从样本集中随机选择一部分样本和特征；
                            使用选择的样本和特征训练一棵决策树；重复步骤1和步骤2多次，
                            构建多棵决策树；对每个样本，将每棵决策树的分类结果进行投票，
                            并选择票数最多的分类结果作为最终结果。
                        </p>
                        <p>
                            随机森林分类器随机选择特征和样本，减少了过拟合的风险，
                            可以处理高维数据，不需要进行特征选择，可以处理缺失值和异常值，
                            可以评估每个特征的重要性，用于特征选择和解释模型。
                            但其训练时间比单棵决策树长，需要构建多棵决策树，模型比较复杂，不易解释。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-green-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">RF_S算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            采用了基本的随机森林分类器。
                            随机森林是一种集成学习方法，
                            它通过构建多个决策树并进行投票来提高分类的准确性。
                            随机森林通过在训练决策树时引入随机性来避免过拟合。
                            每个决策树都是从原始数据集的一个随机子集开始构建的，
                            并且在节点分裂时也会选择特征的一个随机子集。
                        </p>
                        <p>
                            随机森林适合于分类问题，尤其是在数据集较大且特征数量较多时，
                            它可以提供很好的预测性能和泛化能力。
                            在网络安全领域，它可以用于检测异常行为或入侵尝试。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-red-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">RF_SS算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <img src="/algorithm-introduce/knn2.png" alt="description" />
                        <p>
                            采用了带有自适应学习策略的随机森林，
                            比如在每次迭代时根据模型对无标签数据的预测不确定性来选择样本进行标注。
                            自适应随机森林（Adaptive Random Forest）
                            或其他自适应学习策略会根据模型对未标注数据的预测不确定性来选择最有信息量的样本进行标注，
                            以提高学习效率。
                        </p>
                        <p>
                            方法适合于标注成本高昂或数据集中的标签分布不均匀的情况。
                            它可以帮助研究者更有效地利用有限的标注资源，尤其是在分类不平衡的问题中。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-yellow-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">RF_AL算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            采用了主动学习框架，其中随机森林是作为迭代的模型，
                            不断通过查询最有信息的样本来更新训练集。
                            在主动学习框架中，模型会迭代地查询无标签数据中最具代表性的样本，
                            对其进行标注，然后更新训练集和模型。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-indigo-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">RF_SSAL算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            用了带有shrinking机制的随机森林，
                            该机制在每次迭代时会减少不确定性高的样本的影响，
                            以避免模型过拟合。shrinking机制通过对不确定性高的样本施加权重惩罚来实现。
                            在随机森林中，这可以通过调整每个样本的权重来实现，从而减少其对模型预测的影响。
                        </p>
                        <p>
                            方法适合于那些标签噪声较大或数据集中存在大量不确定样本的场景。
                            它可以帮助模型更好地识别和忽略噪声数据，提高其在复杂数据集上的泛化能力。
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
                    <a href="/algorithm" onClick={() => setCurrentPage('algorithm')} style={{ color: 'white' }}>
                        检测算法
                    </a>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

const Algorithm_rfin = () => {
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
                        <Introduce_rf />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Algorithm_rfin;


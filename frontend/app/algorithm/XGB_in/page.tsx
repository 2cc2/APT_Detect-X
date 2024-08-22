'use client';
import { Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined } from '@ant-design/icons';
import { Footer } from '@/components/footer&hernav/Footer';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import Loading from '@/components/loading/loading';

export const Introduce_xgb = () => {
    return (
        <div className="h-full lg:px-6">
            <div className="flex flex-col gap-5 grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-4  w-full">
                <Card className="xl:max-w-sm bg-blue-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">XGBoost分类器算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            XGBoost是2016年由华盛顿大学陈天奇老师带领开发的一个可扩展机器学习系统。
                            严格意义上讲XGBoost并不是一种模型，而是一个可供用户轻松解决分类、
                            回归或排序问题的软件包。它内部实现了梯度提升树(GBDT)模型，
                            并对模型中的算法进行了诸多优化，在取得高精度的同时又保持了极快的速度，
                            在一段时间内成为了国内外数据挖掘、机器学习领域中的大规模杀伤性武器。
                        </p>
                        <p>
                            更重要的是，XGBoost在系统优化和机器学习原理方面都进行了深入的考虑。
                            毫不夸张的讲，XGBoost提供的可扩展性，
                            可移植性与准确性推动了机器学习计算限制的上限，
                            该系统在单台机器上运行速度比当时流行解决方案快十倍以上，
                            甚至在分布式系统中可以处理十亿级的数据。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-green-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">XGBoost模型实现原理</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            XGBoost是基于CART树的集成模型，它的思想是串联多个决策树模型共同进行决策。
                            XGBoost采用迭代预测误差的方法串联。
                            原理举例来说，现在需要预测一辆车价值3000元。
                            构建决策树1训练后预测为2600元，发现有400元的误差，
                            那么决策树2的训练目标为400元，但决策树2的预测结果为350元，
                            还存在50元的误差就交给第三棵树……以此类推，
                            每一颗树用来估计之前所有树的误差，最后所有树预测结果的求和就是最终预测结果。
                        </p>
                        <img src="/algorithm-introduce/xgb1.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-red-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">XGBoost算法优点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <img src="/algorithm-introduce/knn2.png" alt="description" />
                        <p>
                            XGBoost的主要优点包括简单易用，相对其他机器学习库，
                            用户可以轻松使用XGBoost并获得相当不错的效果；高效可扩展，
                            在处理大规模数据集时速度快效果好，对内存等硬件资源要求不高；
                            鲁棒性强，相对于深度学习模型不需要精细调参便能取得接近的效果；
                            XGBoost内部实现提升树模型，可以自动处理缺失值。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-yellow-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">XGBoost算法缺点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            XGBoost的主要缺点包括模型解释性差，XGBoost是一种黑盒模型，
                            用户很难解释模型的预测结果；对异常值敏感，
                            XGBoost对异常值敏感，需要对数据进行预处理；
                            训练时间长，XGBoost在训练时需要较长的时间，
                            尤其是在处理大规模数据集时。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-purple-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">XGB_S算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            使用了有监督学习的XGBoost分类器（XGBClassifier）。
                            无标签数据（X_train_unlabelled）并没有被用于训练模型。
                            模型仅在有标签的数据集（X_train_labelled）上进行训练，
                            然后使用这个训练好的模型来预测无标签数据集中的样本的标签（y_pred）。
                            这种方法没有利用无标签数据中的信息来改善模型的性能。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">XGB_SS</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            用了半监督学习的XGBoost分类器。
                            无标签数据（X_train_unlabelled）被用于半监督学习。
                            模型在每次迭代中都会预测无标签数据的样本的概率（y_unlabelled_proba），
                            然后选择那些高置信度（confidence_threshold）的样本，
                            并将它们添加到有标签的训练集（X_train_labelled）中。
                            这样，模型就能够利用无标签数据中的信息来扩充有标签的训练集，
                            并且随着迭代的进行，模型会不断地更新和重新训练，
                            以包含更多的高置信度样本。这种方法可以提高模型对无标签数据的预测准确性。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">XGB_SSAL算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            使用了自训练（Active Learning）与XGBoost分类器结合的方法。
                            自训练是一种通过迭代地选择数据集中最不确定的样本进行标注，
                            然后更新模型的方式。结合XGBoost，
                            这种方法可以在有限的标注数据下提高模型的性能。
                            后者采用了更多的策略来确定哪些样本应该被选择，
                            例如使用了一个更复杂的置信度阈值。
                        </p>
                        <p>
                            当标注数据有限，而我们有大量未标注的数据时，
                            自训练可以帮助我们更有效地利用有限的标注资源，提高模型的泛化能力。
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

const Algorithm_xgbin = () => {
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
                        <Introduce_xgb />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Algorithm_xgbin;


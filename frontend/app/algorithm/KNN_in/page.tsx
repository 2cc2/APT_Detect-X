'use client';
import { Breadcrumb} from 'antd';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined } from '@ant-design/icons';
import { Footer } from '@/components/footer&hernav/Footer';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import Loading from '@/components/loading/loading';

export const Introduce_knn = () => {
    return (
        <div className="h-full lg:px-6">
            <div className="flex flex-col gap-5 grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-4  w-full">
                <Card className="xl:max-w-sm bg-blue-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">K-近邻算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            k近邻法（K-nearest neighbor,k-NN）由1968年Cover和Hart提出，
                            是一种基本分类与回归方法。使用k近邻法进行分类预测时，
                            需要给定一个训练集，其中包含了已知分类标签的样本数据，
                            对新的实例，根据其k个最近邻的训练实例的类别，
                            通过多数表决法等方式进行预测（这k个实例的多数属于某个类，
                            就把该新实例分为这个类）。因此，k近邻法不具有显式的学习过程。
                            k近邻法实际上利用训练数据集对特征向量空间进行划分，并作为其分类的“模型”。
                        </p>
                        <img src="/algorithm-introduce/knn1.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-green-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">K-近邻模型</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            1.距离向量:特征空间中两个实例点的距离是两个实例点相似程度的反映。
                        </p>
                        <p>
                            2.K值选择:K值的选择会对K近邻法的结果产生重大影响。
                            较小的K值会使得分类结果对异常值更敏感，容易受到噪声的影响，可能导致过拟合。
                        </p>
                        <p>
                            3.分类决策:通常采用多数表决法，即由输入实例的k个邻近的训练实例中的多数类决定实例的类。
                            即一个样本在其特征空间里的k个最邻近的样本中进行投票，该样本属于投票数量较多的那个类别。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-red-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">Knn算法原理</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <img src="/algorithm-introduce/knn2.png" alt="description" />
                        <p>
                            上图描述的就是一个KNN算法的过程（数据位置随机，仅为介绍原理），
                            其中五角星是待测数据，三角形和正方形分别是两个类别，
                            K-近邻算法是在K个最近的样本中进行投票。例如，设置K=3，
                            那么就计算得所有样本的欧氏距离，进行排序，取最近的3个，
                            也就是其中的蓝色圈范围。其中包括两个三角形，一个正方形，
                            其概率也就是：三角形2/3，正方形1/3，因此可以判别出该五角星属于三角形一类。
                            篮圈外存在一个红色的圈，表示K=7时所取到的最近邻样本，
                            投票比例为正方形 4/7，三角形 3/7，五角星判决为正方形，不再是K取3时的三角形。
                        </p>

                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-yellow-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">Knn算法流程</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <img src="/algorithm-introduce/knn3.png" alt="description" />
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
                            <h1 className="text-xl font-semibold">knn算法优点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            简单易懂：KNN算法的原理简单，易于理解和实现。
                        </p>
                        <p>
                            无需训练过程：算法在训练时不需要显式的建模过程，适合处理小规模数据集
                        </p>
                        <p>
                            适用性广泛：KNN算法适用于分类和回归问题，可以处理多分类和多标签问题
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">knn算法缺点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            懒惰算法，对测试样本分类时的计算量大，内存开销大，
                            时间复杂度和空间复杂度都很高，对于大规模数据集，计算时间可能很长。
                        </p>
                        <p>
                            对噪声敏感：存在噪声的数据可能会影响KNN的性能，容易导致过拟合。
                        </p>
                        <p>
                            特征缩放敏感：KNN对特征的尺度敏感，通常需要进行特征缩放（如标准化或归一化）
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">KNN_AL算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            使用自训练策略的KNN来处理半监督学习问题。
                            模型首先使用已有的有标签数据来训练，
                            然后通过预测无标签数据的概率来选择高置信度的样本进行标注。
                            一旦获得了新的标签，模型将会重新训练并更新训练集。
                        </p>
                        <p>
                        </p>
                        <p>
                            这个方法适用于那些标签获取成本较高的场景，
                            可以通过选择最有信息量的样本进行标注来提高效率。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">KNN_SS算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            使用半监督学习策略的KNN，
                            但它没有涉及到主动学习（即选择性地标注数据）。
                            它使用所有的有标签数据来训练模型，
                            并使用模型预测无标签数据的类别，
                            结合了标签传播和KNN特性的半监督学习实现。
                        </p>
                        <p>
                        </p>
                        <p>
                            方法在标签获取相对容易但数据量大
                            且需要利用未标记数据信息的场景中非常有用。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">KNN_SSAL算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            采用结合了自训练和半监督学习的KNN模型。
                            它首先使用有标签数据训练模型，
                            然后通过迭代的方式选择高置信度的无标签数据进行标注，
                            并将这些新标注的数据加入到有标签数据集中。
                        </p>
                        <p>
                        </p>
                        <p>
                            这个方法适用于那些需要通过选择性标注来提高模型性能的场景，
                            尤其是在标签获取成本较高或者数据集较大时。
                            这种模型能够在保持标注成本低的同时，提高模型的准确性和效率。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">KNN_SSAL算法优点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" style={{ maxHeight: '240px' }}>
                        <p>
                            与KNN_S简单的KNN模型相比，
                            结合了自训练的KNN模型KNN_SSAL能够通过选择性标注来提高模型性能，
                            尤其是在标签获取成本高或数据集大的情况下，
                            但计算量可能会更大，因为需要对未标记数据进行多次预测和标注。
                        </p>
                        <p>
                            与KNN_SS半监督KNN模型相比，
                            半监督KNN模型KNN_SSAL已经考虑了未标记数据，
                            而结合自训练的模型进一步优化了样本的选择过程，
                            提高了标注的效率，但可能会增加模型的复杂性，
                            并且需要设定一些超参数，如置信度阈值和低置信度样本大小等。
                        </p>
                        <p>
                            与KNN_AL自训练KNN模型相比，
                            结合了自训练和半监督学习的KNN模型KNN_SSAL，
                            在自训练的基础上，通过迭代选择高置信度的样本进行标注，
                            更加注重样本的选择，可能会有更好的性能，
                            但和自训练模型一样，可能需要较多的超参数调整，
                            并且对模型的初始训练质量要求较高。
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

const Algorithm_knnin = () => {
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
                        <Introduce_knn />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Algorithm_knnin;


import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { KNN_AL } from './AL';
import { KNN_S } from './S';
import { KNN_SS } from './SS';
import { KNN_SSAL } from './SSAL';
import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";


const { TabPane } = Tabs;

// export const Introduce_knn = () => {
//     const [markdown, setMarkdown] = useState('');

//     useEffect(() => {
//         fetch('/algorithm-introduce/knn.md')
//             .then(response => response.text())
//             .then(data => {
//                 setMarkdown(data);
//             });
//     }, []);

//     return (
//         <div>
//             <Markdown content={markdown} />
//         </div>
//     );
// };

export const Introduce_knn = () => {
    return (
        <div className="h-full lg:px-6">
            <div className="flex flex-col gap-2 grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5  w-full">
                <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">K-近邻算法</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
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
                <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">K-近邻模型</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
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
                <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">Knn算法原理</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
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
                <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">Knn算法流程</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
                        <img src="/algorithm-introduce/knn3.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
                    <CardBody className="py-1 overflow-auto" >
                        <img src="/algorithm-introduce/knn6.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">优点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
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
                <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">缺点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
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
            </div>
        </div>
    );
};

export const KNN = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">KNN算法介绍</span>} key="1">
                <Introduce_knn />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">主动学习</span>} key="2">
                <KNN_AL />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">监督学习</span>} key="3">
                <KNN_S />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">半监督学习</span>} key="4">
                <KNN_SS />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">主动半监督学习</span>} key="5">
                <KNN_SSAL />
            </TabPane>
        </Tabs>
    );
};

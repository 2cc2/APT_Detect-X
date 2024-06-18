import { Tabs } from 'antd';
import React from 'react';
import { KNN_AL } from './AL';
import { KNN_S } from './S';
import { KNN_SS } from './SS';
import { KNN_SSAL } from './SSAL';
import { Card, CardBody, CardHeader } from "@nextui-org/react";


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
                <Card className="xl:max-w-sm bg-blue-50 rounded-xl shadow-md px-3 w-full">
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
                <Card className="xl:max-w-sm bg-green-50 rounded-xl shadow-md px-3 w-full">
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
                <Card className="xl:max-w-sm bg-red-50 rounded-xl shadow-md px-3 w-full">
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
                <Card className="xl:max-w-sm bg-yellow-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">Knn算法流程</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
                        <img src="/algorithm-introduce/knn3.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-indigo-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">伪代码</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
                        <img src="/algorithm-introduce/knn6.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-purple-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">knn算法优点</h1>
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
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">knn算法缺点</h1>
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
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">自学习（Active Learning）</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
                        <p>
                            self-training是最简单的半监督方法之一，
                            其主要思想是找到一种方法，用未标记的数据集来扩充已标记的数据集。
                            即首先用有标签数据训练一个分类器，然后用这个分类器对无标签数据进行分类，
                            这样就会产生伪标签（pseudo label）或软标签（soft label），
                            挑选一定标准的伪标签样本用来迭代训练分类器。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">自学习伪代码</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
                        <img src="/algorithm-introduce/knn7.png" alt="description" />
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">使用场景</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
                        <p>
                            在现实生活中得到大量有标签数据需要大量时间经历，
                            而自训练是有标签数据+无标签数据混合成的训练数据中使用的深度学习算法，
                            可以利用自训练方法对无标记数据进行标记，实现己标记数据的扩充。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">优点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
                        <p>
                            自训练可扩展性、通用性和灵活性，
                            在每种条件设置下均能很好地发挥作用，
                            无论是少数据状态、多数据状态、弱数据增强还是强数据增强。
                            并且自训练不依赖于模型架构也不依赖于数据集
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">缺点</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
                        <p>
                            受标记样本分布和数量的限制，很难有效地发现高置信度无标记样本，
                            虽然目前已有较多半监督自训练算法，但这些算法所使用的基分类器都有自身的弱点，
                            自训练一般需要有标注样本与无标签样本的性质差异不能太大，
                            并且需要迭代多次，且几乎所有的发现高置信度无标记样本的方法都需要排序置信度值，
                            排序过程增加了计算时间，所以计算时间会较长。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">半监督学习</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
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
                        <p>
                            其中，k-近邻算法是一种简单有效的半监督学习方法。
                            KNN算法的核心思想是利用训练集中与待预测样本最相似的k个样本的信息来预测该样本的类别。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">基于传播的半监KNN</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
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
                    <CardBody className="py-1 overflow-auto" >
                        <p>
                            算法首先对未标记的样本进行聚类。每个聚类中心代表该类未标记样本的平均标签。
                            然后，算法使用已标记的样本来为这些聚类中心“投票”，从而为每个聚类分配一个标签，
                            最终使用这些聚类标签来预测未标记样本的类别。
                            这种方法适用于聚类中心能够很好地代表未标记样本的情况。
                        </p>
                    </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-pink-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">KNN_SSAL</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
                        <p>
                            采用结合了自训练和半监督学习的KNN模型。
                        </p>
                        <p>
                            它首先使用有标签数据训练模型，
                            然后通过迭代的方式选择高置信度的无标签数据进行标注，
                            并将这些新标注的数据加入到有标签数据集中。
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

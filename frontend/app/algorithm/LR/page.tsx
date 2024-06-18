import { Tabs } from 'antd';
import React from 'react';
import { LR_AL } from './AL';
import { LR_S } from './S';
import { LR_SS } from './SS';
import { LR_SSAL } from './SSAL';
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const { TabPane } = Tabs;

// export const Introduce_lr = () => {
//     const [markdown, setMarkdown] = useState('');

//     useEffect(() => {
//         fetch('/algorithm-introduce/lr.md')
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

export const Introduce_lr = () => {
    return (
        <div className="h-full lg:px-6">
            <div className="flex flex-col gap-2 grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5  w-full">
                <Card className="xl:max-w-sm bg-blue-50 rounded-xl shadow-md px-3 w-full">
                    <CardHeader className="flex gap-3">
                        <div className="p-3 flex flex-col font-extrabold">
                            <h1 className="text-xl font-semibold">逻辑回归模型</h1>
                        </div>
                    </CardHeader>
                    <CardBody className="py-1 overflow-auto" >
                        <p>
                            
                        </p>
                        <img src="/algorithm-introduce/knn1.png" alt="description" />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export const LR = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">LR算法介绍</span>} key="1">
                <Introduce_lr />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">主动学习</span>} key="2">
                <LR_AL />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">监督学习</span>} key="3">
                <LR_S />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">半监督学习</span>} key="4">
                <LR_SS />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">主动半监督学习</span>} key="5">
                <LR_SSAL />
            </TabPane>
        </Tabs>
    );
};

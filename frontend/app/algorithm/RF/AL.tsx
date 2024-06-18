import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Markdown from '../../../components/markdown/Markdown';

const { TabPane } = Tabs;

export const Introduce = () => {

    return (
        <div >
        </div>
    );
};

export const Code = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-kdd/RF/AL_code.md')
            .then(response => response.text())
            .then(data => {
                setMarkdown(data);
            });
    }, []);

    return (
        <div >
            <Markdown content={markdown} />
        </div>
    );
};

// export const Show = () => {
//     return (
//         <div>
//         </div>
//     );
// };

export const RF_AL = () => {
    return (
        <Tabs defaultActiveKey="2">
            {/* <TabPane tab="算法介绍" key="1">
                <Introduce />
            </TabPane> */}
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">代码示例--KDD数据集</span>} key="2">
                <Code />
            </TabPane>
            {/* <TabPane tab={<span className="text-gray-800 font-bold text-lg">代码示例--Loghub数据集</span>} key="3">
                <Show />
            </TabPane> */}
        </Tabs>
    );
};

import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Markdown from '../../../components/markdown/Markdown';

const { TabPane } = Tabs;

// export const Introduce = () => {

//     return (
//         <div >
//         </div>
//     );
// };

export const Code = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-kdd/KNN/SS_code.md')
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

export const Show = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-Log/KNN/SS_code.md')
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

export const KNN_SS = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">代码示例--KDD数据集</span>} key="1">
                <Code />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">代码示例--Loghub数据集</span>} key="2">
                <Show />
            </TabPane>
        </Tabs>
    );
};

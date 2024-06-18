import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Markdown from '../../../components/markdown/Markdown';
import { LR_AL } from './AL';
import { LR_S } from './S';
import { LR_SS } from './SS';
import { LR_SSAL } from './SSAL';

const { TabPane } = Tabs;

export const Introduce_lr = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-introduce/lr.md')
            .then(response => response.text())
            .then(data => {
                setMarkdown(data);
            });
    }, []);

    return (
        <div>
            <Markdown content={markdown} />
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

import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Markdown from '../../../components/markdown/Markdown';
import { RF_AL } from './AL';
import { RF_S } from './S';
import { RF_SS } from './SS';
import { RF_SSAL } from './SSAL';

const { TabPane } = Tabs;

export const Introduce_rf = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-introduce/rf.md')
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

export const RF = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">RF算法介绍</span>} key="1">
                <Introduce_rf />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">主动学习</span>} key="2">
                <RF_AL />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">监督学习</span>} key="3">
                <RF_S />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">半监督学习</span>} key="4">
                <RF_SS />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">主动半监督学习</span>} key="5">
                <RF_SSAL />
            </TabPane>
        </Tabs>
    );
};

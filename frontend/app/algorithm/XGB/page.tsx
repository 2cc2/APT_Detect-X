import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Markdown from '../../../components/markdown/Markdown';
import { XGB_AL } from './AL';
import { XGB_S } from './S';
import { XGB_SS } from './SS';
import { XGB_SSAL } from './SSAL';

const { TabPane } = Tabs;

export const Introduce_xgb = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-introduce/xgb.md')
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

export const XGB = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">XGB算法介绍</span>} key="1">
                <Introduce_xgb />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">主动学习</span>} key="2">
                <XGB_AL />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">监督学习</span>} key="3">
                <XGB_S />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">半监督学习</span>} key="4">
                <XGB_SS />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">主动半监督学习</span>} key="5">
                <XGB_SSAL />
            </TabPane>
        </Tabs>
    );
};

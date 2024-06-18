import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Markdown from '../../../components/markdown/Markdown';
import { SVM_AL } from './AL';
import { SVM_S } from './S';
import { SVM_SS } from './SS';
import { SVM_SSAL } from './SSAL';

const { TabPane } = Tabs;

export const Introduce_svm = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-introduce/svm.md')
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

export const SVM = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">SVM算法介绍</span>} key="1">
                <Introduce_svm />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">主动学习</span>} key="2">
                <SVM_AL />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">监督学习</span>} key="3">
                <SVM_S />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">半监督学习</span>} key="4">
                <SVM_SS />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">主动半监督学习</span>} key="5">
                <SVM_SSAL />
            </TabPane>
        </Tabs>
    );
};

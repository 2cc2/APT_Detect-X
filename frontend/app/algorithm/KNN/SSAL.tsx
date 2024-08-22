import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Markdown from '../../../components/markdown/Markdown';

const { TabPane } = Tabs;

export const Code = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-kdd/KNN/SSAL_code.md')
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
        fetch('/algorithm-Log/KNN/SSAL_code.md')
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

export const KNN_SSAL = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="KDD数据集" key="1">
                <Code />
            </TabPane>
            <TabPane tab="Loghub数据集" key="2">
                <Show />
            </TabPane>
        </Tabs>
    );
};

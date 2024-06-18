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
        fetch('/algorithm-kdd/XGB/SS_code.md')
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
        fetch('/algorithm-Log/XGB/SS_code.md')
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

export const XGB_SS = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="代码示例--KDD数据集" key="1">
                <Code />
            </TabPane>
            <TabPane tab="代码示例--Loghub数据集" key="2">
                <Show />
            </TabPane>
        </Tabs>
    );
};

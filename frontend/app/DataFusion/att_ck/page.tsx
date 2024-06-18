import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import 'github-markdown-css/github-markdown.css';
import Markdown from '@/components/markdown/Markdown';

const { TabPane } = Tabs;

export const Introduce = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/DataFusion/att_ck/introduce.md')
            .then(response => response.text())
            .then(data => {
                setMarkdown(data);
            });
    }, []);

    return (
        <div style={{ padding: '20px', overflow: 'auto' }}>
            <Markdown content={markdown} />
        </div>
    );
};

export const Fusion = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/DataFusion/att_ck/Fusion.md')
            .then(response => response.text())
            .then(data => {
                setMarkdown(data);
            });
    }, []);

    return (
        <div style={{ padding: '20px', overflow: 'auto' }}>
            <Markdown content={markdown} />
        </div>
    );
};


export const Att_ck = () => {

    return (
        <Tabs defaultActiveKey="1" >
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">数据特征</span>} key="1">
                <Introduce />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">转换stix</span>} key="2">
                <Fusion />
            </TabPane>
        </Tabs>
    );
};

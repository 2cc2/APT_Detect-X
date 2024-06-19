'use client';
import React, { useEffect, useState } from 'react';
import 'github-markdown-css/github-markdown.css';
import Markdown from '@/components/markdown/Markdown';
import { Breadcrumb, Tabs } from 'antd';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined } from '@ant-design/icons';
import { Footer } from '@/components/footer&hernav/Footer';
import Loading from '@/components/loading/loading';

const { TabPane } = Tabs;

export const Introduce = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/DataFusion/cve/introduce.md')
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
        fetch('/DataFusion/cve/Fusion.md')
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


export const Cev = () => {

    return (
        <Tabs defaultActiveKey="1" className='p-4'>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">数据特征</span>} key="1">
                <Introduce />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">转换stix</span>} key="2">
                <Fusion />
            </TabPane>
        </Tabs>
    );
};

const Layout = ({ children }: any) => (
    <div>
        <div style={{ flex: '1 0 auto' }}>
            <HorizontalNav />
        </div>
        <div className="flex">
            <SidebarWrapper />
            <div className="flex-grow">
                {children}
            </div>
        </div>
    </div>
);

const TopNavbar = ({ setCurrentPage }: any) => {
    return (
        <div className="flex justify-between p-2 bg-gray-600" >
            <Breadcrumb className="breadcrumb-white">
                <Breadcrumb.Item>
                    <a href="/dashboard" style={{ color: 'white' }}>
                        <HomeOutlined />
                        <span>首页</span>
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/dataset" onClick={() => setCurrentPage('dataset')} style={{ color: 'white' }}>
                        数据集
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/algorithm" onClick={() => setCurrentPage('algorithm')} style={{ color: 'white' }}>
                        检测算法
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/comparison" onClick={() => setCurrentPage('comparison')} style={{ color: 'white' }}>
                        评估对比
                    </a>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

const DataFusion_cev = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // 模拟数据加载过程
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // 假设数据加载需要1.5秒
        // 清理定时器
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Layout>
                    <div>
                        <TopNavbar />
                        <Cev />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default DataFusion_cev;
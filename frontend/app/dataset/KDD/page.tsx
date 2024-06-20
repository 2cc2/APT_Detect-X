'use client';
import { Breadcrumb, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import 'github-markdown-css/github-markdown.css';
import Markdown from '@/components/markdown/Markdown';
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined } from '@ant-design/icons';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import { Footer } from '@/components/footer&hernav/Footer';
import Loading from '@/components/loading/loading';

const { TabPane } = Tabs;

export const Introduce = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/DataProcessing/KDD/kdd_Introduce.md')
            .then(response => response.text())
            .then(data => {
                setMarkdown(data);
            });
    }, []);

    return (
        <div style={{ padding: '30px', overflow: 'auto' }}>
            <Markdown content={markdown} />
        </div>
    );
};

export const Feature = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/DataProcessing/KDD/kdd_feature.md')
            .then(response => response.text())
            .then(data => {
                setMarkdown(data);
            });
    }, []);

    return (
        <div style={{ padding: '30px', overflow: 'auto' }}>
            <Markdown content={markdown} />
        </div>
    );
};

export const CSVDataGrid = () => {
    const [data, setData] = useState<Array<{ [key: string]: string }>>([]);

    useEffect(() => {
        fetch('/data/kddcup.csv')//http://localhost:5001/data/csvdata
            .then(response => response.text())
            .then(csvData => {
                const parsedData = Papa.parse(csvData, { header: true }).data as Array<{ [key: string]: string }>;
                setData(parsedData);
            });
    }, []);

    return (
        <div style={{ height: 'calc(100vh - 215px)', maxWidth: 'calc(100vh + 300px)', overflow: 'auto' }}>
            <table style={{ backgroundColor: 'white', borderCollapse: 'collapse', tableLayout: 'fixed', maxWidth: '100%' }}>
                <thead>
                    <tr>
                        {data[0] && Object.keys(data[0]).map((key, index) => (
                            <th key={index} style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {Object.entries(row).map(([key, value], i) => (
                                <td key={i} style={{
                                    border: '1px solid black',
                                    padding: '8px',
                                    textAlign: 'left'
                                }}>
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export const Kdd = () => {

    return (
        <Tabs defaultActiveKey="1" className='p-8'>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">数据介绍</span>} key="1">
                <Introduce />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">特征描述</span>} key="2">
                <Feature />
            </TabPane>
            <TabPane tab={<span className="text-gray-800 font-bold text-lg">数据样本</span>} key="3">
                <CSVDataGrid />
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
                    <a href="/dataset/KDD" onClick={() => setCurrentPage('dataset')} style={{ color: 'white' }}>
                        数据集
                    </a>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

const DataProcessing_kdd = () => {
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
                        <Kdd />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default DataProcessing_kdd;

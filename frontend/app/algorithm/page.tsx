'use client';
import React, { useEffect, useState } from 'react'
import { SidebarWrapper } from '@/components/sidebar/sidebar'
import { Breadcrumb, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { KNN } from './KNN/page';
import { LR } from './LR/page';
import { RF } from './RF/page';
import { XGB } from './XGB/page';
import { SVM } from './SVM/page';

import Markdown from '../../components/markdown/Markdown';

const Default = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-kdd/Default.md')
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


const Docs = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const tags = ['K-近邻算法', '逻辑回归算法', '随机森林算法', '支持向量机算法', 'XGBoost分类器'];

    const onTagClick = (tag: string) => {
        setSelectedTag(tag);
    };

    return (
        <div className="flex" style={{ height: 'calc(100vh - 60px)' }}>
            <div className='bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md' style={{ flex: 1 }}>
                {/* <h2
                    className="text-3xl font-bold mb-7 text-black"
                    onClick={() => {
                        setSelectedTag(null)
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    算法选择
                </h2> */}
                <Menu
                    selectedKeys={selectedTag ? [selectedTag] : []}
                    mode="inline"
                >
                    {tags.map((tag) => (
                        <Menu.Item
                            key={tag}
                            onClick={() => onTagClick(tag)}
                            className="text-gray-800 font-bold text-lg"
                        >
                            {tag}
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
            <div className='bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md' style={{ flex: 7 }}>
                <div className='bg-white p-2 rounded-lg' style={{ maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
                    {selectedTag === null && <Default />}

                    {selectedTag === 'K-近邻算法' && <KNN />}
                    {selectedTag === '逻辑回归算法' && <LR />}
                    {selectedTag === '随机森林算法' && <RF />}
                    {selectedTag === '支持向量机算法' && <SVM />}
                    {selectedTag === 'XGBoost分类器' && <XGB />}
                </div>
            </div>
        </div>
    )
}

const Layout = ({ children }: any) => (
    <div className="flex">

        <SidebarWrapper />
        <div className="flex-grow">
            {children}
        </div>
    </div>
);

const TopNavbar = ({ setCurrentPage }: any) => {
    return (
        <div className="flex justify-between p-4 bg-gray-300 text-white" >
            <Breadcrumb className="breadcrumb-white">
                <Breadcrumb.Item>
                    <a href="/dashboard" style={{ color: 'white' }}>
                        <HomeOutlined />
                        <span>首页</span>
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/dataset" onClick={() => setCurrentPage('dataset')} style={{ color: 'white' }}>
                        查看数据
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/algorithm-kdd" onClick={() => setCurrentPage('algorithm')} style={{ color: 'white' }}>
                        检测算法
                    </a>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

const DataProcessing = () => {

    return (
        <Layout>
            <TopNavbar />
            <Docs />
        </Layout>
    );
};

export default DataProcessing;
'use client';
import React, { useState } from 'react'
import { SidebarWrapper } from '@/components/sidebar/sidebar'
import { Breadcrumb, Menu, Button, Dropdown } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import Comparison_algorithm from './different_algorithm/page';
import Comparison_dataset from './different_dataset/page';
import Comparison_same from './same/page';


const Docs = () => {

    const [selectedTags, setSelectedTags] = useState<string | null>(null);

    // 定义标签列表
    const tags = ['同算法同数据集', '不同算法同数据集', '同算法不同数据集'];

    return (
        <div className="flex" style={{ height: 'calc(100vh - 60px)' }}>
            <div className='bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md' style={{ flex: 1 }}>
                <h2
                    className="text-3xl font-bold mb-7 text-black"
                    onClick={() => setSelectedTags(null)}
                    style={{ cursor: 'pointer' }}
                >
                    评估分类
                </h2>
                <Menu
                    selectedKeys={selectedTags ? [selectedTags] : []}
                    mode="vertical"
                    onClick={({ key }) => setSelectedTags(key)}
                >
                    {tags.map((tag) => (
                        <Menu.Item key={tag} className="text-gray-800 font-bold text-lg">
                            {tag}
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
            <div className='bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md' style={{ flex: 7 }}>
                <div className='bg-white p-4 rounded-lg' style={{ maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
                    {selectedTags === null && <div />}
                    {selectedTags === '同算法同数据集' && <Comparison_same />}
                    {selectedTags === '不同算法同数据集' && <Comparison_algorithm />}
                    {selectedTags === '同算法不同数据集' && <Comparison_dataset />}
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
        <div className="flex justify-between p-4 bg-gray-300" >
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

const DataProcessing = () => {

    return (
        <Layout>
            <TopNavbar />
            <Docs />
        </Layout>
    );
};

export default DataProcessing;

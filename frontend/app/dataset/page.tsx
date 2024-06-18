'use client';
import React, { useState } from 'react'
import { SidebarWrapper } from '@/components/sidebar/sidebar'
import { Breadcrumb, Menu, Button, Dropdown } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Kdd } from './KDD/page';
import { StreamSpot } from './StreamSpot/page';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Log } from './Log/page';

const Docs = () => {

    const [selectedTags, setSelectedTags] = useState<string | null>(null);

    // 定义标签列表
    const tags = ['KDD数据集', 'StreamSpot数据集', 'HDFS数据集'];

    return (
        <div className="flex" style={{ height: 'calc(100vh - 60px)' }}>
            <div className='bg-white dark:bg-zinc-800 p-4  shadow-md' style={{ flex: 1 }}>
                {/* <h2
                    className="text-3xl font-bold mb-7 text-black"
                    onClick={() => setSelectedTags(null)}
                    style={{ cursor: 'pointer' }}
                >
                    数据集
                </h2> */}
                <Menu
                    selectedKeys={selectedTags ? [selectedTags] : []}
                    mode="vertical"
                    onClick={({ key }) => setSelectedTags(key)}
                >
                    {tags.map((tag) => (
                        <Menu.Item key={tag} className="text-gray-800  text-lg">
                            {tag}
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
            <div className='bg-white p-4  shadow-md' style={{ flex: 7 }}>
                <div className='p-4 ' style={{ maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
                    {selectedTags === 'KDD数据集' && <Kdd />}
                    {selectedTags === 'StreamSpot数据集' && <StreamSpot />}
                    {selectedTags === 'HDFS数据集' && <Log />}
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

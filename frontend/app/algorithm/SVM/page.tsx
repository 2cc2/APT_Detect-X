'use client';
import { Breadcrumb, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { SVM_AL } from './AL';
import { SVM_S } from './S';
import { SVM_SS } from './SS';
import { SVM_SSAL } from './SSAL';
import { Footer } from '@/components/footer&hernav/Footer';
import { HomeOutlined } from '@ant-design/icons';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import Loading from '@/components/loading/loading';

const { TabPane } = Tabs;

export const SVM = () => {
    return (
        <Tabs defaultActiveKey="2" className='p-4'>
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
            </Breadcrumb>
        </div>
    );
};

const Algorithm_svm = () => {
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
                        <SVM />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Algorithm_svm;
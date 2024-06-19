'use client';
import { useEffect, useState } from 'react';
import { theme as primerTheme } from '@primer/react';
import { Theme } from '../../node_modules/@primer/components/lib/ThemeProvider';
import dynamic from 'next/dynamic';
import { ThemeProvider } from "next-themes";
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { Footer } from '@/components/footer&hernav/Footer';
import Loading from '@/components/loading/loading';

const NotebookComponentNoSSR = dynamic(
    () => import('../../components/jupyter/NotebookComponent'),
    { ssr: false }
);

const CellComponentNoSSR = dynamic(
    () => import('../../components/jupyter/CellComponent'),
    { ssr: false }
);

const JupyterDemo = () => {
    const [theme, setTheme] = useState<Theme>(primerTheme); // 使用primerTheme作为初始主题
    return (
        <>
            <NotebookComponentNoSSR colorMode={'light'} theme={theme} />
            <CellComponentNoSSR colorMode={'light'} theme={theme} />
        </>
    )
}

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

const Lab = () => {
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
                        <ThemeProvider>
                            <JupyterDemo />
                        </ThemeProvider>
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Lab;


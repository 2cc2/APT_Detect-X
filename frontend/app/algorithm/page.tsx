'use client';
import React, { useState } from 'react'
import { SidebarWrapper } from '@/components/sidebar/sidebar'
import { Breadcrumb ,Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { Default, Introduce_knn, Introduce_lr, Introduce_rf, Introduce_svm, Introduce_xgb } from './introduce';
import { KNN_AL } from './KNN/AL';
import { KNN_S } from './KNN/S';
import { KNN_SS } from './KNN/SS';
import { KNN_SSAL } from './KNN/SSAL';
import { LR_AL } from './LR/AL';
import { LR_S } from './LR/S';
import { LR_SS } from './LR/SS';
import { LR_SSAL } from './LR/SSAL';
import { RF_AL } from './RF/AL';
import { RF_S } from './RF/S';
import { RF_SS } from './RF/SS';
import { RF_SSAL } from './RF/SSAL';
import { XGB_AL } from './XGB/AL';
import { XGB_S } from './XGB/S';
import { XGB_SS } from './XGB/SS';
import { XGB_SSAL } from './XGB/SSAL';
import { SVM_AL } from './SVM/AL';
import { SVM_S } from './SVM/S';
import { SVM_SS } from './SVM/SS';
import { SVM_SSAL } from './SVM/SSAL';

const Docs = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedSubTag, setSelectedSubTag] = useState<string | null>(null);
    const [openKeys, setOpenKeys] = useState<string[]>([]);

    const tags = ['K-近邻算法', '逻辑回归算法', '随机森林算法', '支持向量机算法', 'XGBoost分类器'];
    const subTags = ['主动学习', '监督学习', '半监督学习', '主动半监督学习'];

    const onTitleClick = ({ key }: { key: string }) => {
        const index = openKeys.indexOf(key);
        const newOpenKeys = [...openKeys];

        if (index === -1) {
            // 如果大标签是折叠状态，点击就会设置为 'DEFAULT'
            setSelectedSubTag('DEFAULT');
            newOpenKeys.push(key);
        } else {
            // 如果大标签是展开状态，点击就不会设置为 'DEFAULT'
            newOpenKeys.splice(index, 1);
        }

        setSelectedTag(key);
        setOpenKeys(newOpenKeys);
    };

    const onSubTagClick = (tag: string, subTag: string) => {
        if (selectedTag !== tag) {
            setSelectedSubTag('DEFAULT');
        }
        setSelectedTag(tag);
        setSelectedSubTag(subTag);
    };

    return (
        <div className="flex" style={{ height: 'calc(100vh - 60px)' }}>
            <div className='bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md' style={{ flex: 1 }}>
                <h2
                    className="text-3xl font-bold mb-7 text-black"
                    onClick={() => {
                        setSelectedTag(null)
                        setSelectedSubTag(null);
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    算法选择
                </h2>
                <Menu
                    selectedKeys={selectedTag ? [selectedTag] : []}
                    openKeys={openKeys}
                    mode="inline"
                    onOpenChange={setOpenKeys}
                >
                    {tags.map((tag) => (
                        <Menu.SubMenu
                            key={tag}
                            title={tag}
                            onTitleClick={onTitleClick}
                            className="text-gray-800 font-bold text-lg"
                        >
                            {subTags.map((subTag) => {
                                return (
                                    <Menu.Item
                                        key={`${tag}-${subTag}`}
                                        onClick={() => onSubTagClick(tag, subTag)}
                                    > 
                                        {subTag}
                                    </Menu.Item>
                                );
                            })}
                        </Menu.SubMenu>
                    ))}
                </Menu>
            </div>
            <div className='bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md' style={{ flex: 7 }}>
                <div className='bg-white p-2 rounded-lg' style={{ maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
                    {selectedTag === null && selectedSubTag  === null && <Default />} 
                    
                    {selectedTag === 'K-近邻算法' && selectedSubTag === 'DEFAULT' && <Introduce_knn />}
                    {selectedTag === '逻辑回归算法' && selectedSubTag === 'DEFAULT' && <Introduce_lr />}
                    {selectedTag === '随机森林算法' && selectedSubTag === 'DEFAULT' && <Introduce_rf />}
                    {selectedTag === '支持向量机算法' && selectedSubTag === 'DEFAULT' && <Introduce_svm />}
                    {selectedTag === 'XGBoost分类器' && selectedSubTag === 'DEFAULT' && <Introduce_xgb />}

                    {selectedTag === 'K-近邻算法' && selectedSubTag === '主动学习' && <KNN_AL/>}
                    {selectedTag === 'K-近邻算法' && selectedSubTag === '监督学习' && <KNN_S/>}
                    {selectedTag === 'K-近邻算法' && selectedSubTag === '半监督学习' && <KNN_SS />}
                    {selectedTag === 'K-近邻算法' && selectedSubTag === '主动半监督学习' && <KNN_SSAL />}

                    {selectedTag === '逻辑回归算法' && selectedSubTag === '主动学习' && <LR_AL/>}
                    {selectedTag === '逻辑回归算法' && selectedSubTag === '监督学习' && <LR_S/>}
                    {selectedTag === '逻辑回归算法' && selectedSubTag === '半监督学习' && <LR_SS />}
                    {selectedTag === '逻辑回归算法' && selectedSubTag === '主动半监督学习' && <LR_SSAL />}

                    {selectedTag === '随机森林算法' && selectedSubTag === '主动学习' && <RF_AL/>}
                    {selectedTag === '随机森林算法' && selectedSubTag === '监督学习' && <RF_S/>}
                    {selectedTag === '随机森林算法' && selectedSubTag === '半监督学习' && <RF_SS  />}
                    {selectedTag === '随机森林算法' && selectedSubTag === '主动半监督学习' && <RF_SSAL />}
                    
                    {selectedTag === '支持向量机算法' && selectedSubTag === '主动学习' && <SVM_AL />}
                    {selectedTag === '支持向量机算法' && selectedSubTag === '监督学习' && <SVM_S />}
                    {selectedTag === '支持向量机算法' && selectedSubTag === '半监督学习' && <SVM_SS />}
                    {selectedTag === '支持向量机算法' && selectedSubTag === '主动半监督学习' && <SVM_SSAL />}

                    {selectedTag === 'XGBoost分类器' && selectedSubTag === '主动学习' && <XGB_AL/>}
                    {selectedTag === 'XGBoost分类器' && selectedSubTag === '监督学习' && <XGB_S/>}
                    {selectedTag === 'XGBoost分类器' && selectedSubTag === '半监督学习' && <XGB_SS />}
                    {selectedTag === 'XGBoost分类器' && selectedSubTag === '主动半监督学习' && <XGB_SSAL />}
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
        <div className="flex justify-between p-4 " >
            <Breadcrumb className="breadcrumb-white">
                <Breadcrumb.Item>
                    <a href="/dashboard" >
                        <HomeOutlined />
                        <span>首页</span>
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/dataset" onClick={() => setCurrentPage('dataset')} >
                        查看数据
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/algorithm-kdd" onClick={() => setCurrentPage('algorithm')} >
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

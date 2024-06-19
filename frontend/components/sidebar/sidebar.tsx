import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Menu, Divider } from 'antd';
import type { GetProp, MenuProps } from 'antd';


type MenuTheme = GetProp<MenuProps, 'theme'>;

type MenuItem = GetProp<MenuProps, 'items'>[number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: (
      <a href="/dashboard" rel="noopener noreferrer">
        首页
      </a>
    ),
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: "数据集介绍",
    children: [
      {
        key: '3',
        label: (
          <a href="/dataset/KDD" rel="noopener noreferrer">
            KDD
          </a>
        ),
      },
      {
        key: '4',
        label: (
          <a href="/dataset/Log" rel="noopener noreferrer">
            LOG
          </a>
        ),
      },
      {
        key: '5',
        label: (
          <a href="/dataset/StreamSpot" rel="noopener noreferrer">
            StreamSpot
          </a>
        ),
      },
    ],
  },
  {
    key: 'sub4',
    label: "数据融合",
    icon: <SettingOutlined />,
    children: [
      {
        key: '18',
        label: (
          <a href="/DataFusion/att_ck" rel="noopener noreferrer">
            att&ck数据集
          </a>
        ),
      },
      {
        key: '19',
        label: (
          <a href="/DataFusion/cev" rel="noopener noreferrer">
            cev数据集
          </a>
        ),
      },
      {
        key: '20',
        label: (
          <a href="/DataFusion/urlhause" rel="noopener noreferrer">
            URLHause数据集
          </a>
        ),
      },
    ],
  },
  {
    key: 'sub1',
    label: '算法介绍',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '6',
        label:
          <a href="/algorithm/KNN_in" rel="noopener noreferrer">
            K-邻近
          </a>
      },
      {
        key: '7',
        label:
          <a href="/algorithm/LR_in" rel="noopener noreferrer">
            逻辑回归
          </a>
      },
      {
        key: '8',
        label:
          <a href="/algorithm/RF_in" rel="noopener noreferrer">
            随机森林
          </a>
      },
      {
        key: '9',
        label:
          <a href="/algorithm/SVM_in" rel="noopener noreferrer">
            支持向量机
          </a>
      },
      {
        key: '10',
        label:
          <a href="/algorithm/XGB_in" rel="noopener noreferrer">
            XGBoost分类器
          </a>
      },
    ],
  },
  {
    key: 'sub2',
    label: '代码实现',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '11',
        label:
          <a href="/algorithm/KNN" rel="noopener noreferrer">
            K-邻近
          </a>
      },
      {
        key: '12',
        label:
          <a href="/algorithm/LR" rel="noopener noreferrer">
            逻辑回归
          </a>
      },
      {
        key: '13',
        label:
          <a href="/algorithm/RF" rel="noopener noreferrer">
            随机森林
          </a>
      },
      {
        key: '14',
        label:
          <a href="/algorithm/SVM" rel="noopener noreferrer">
            支持向量机
          </a>
      },
      {
        key: '15',
        label:
          <a href="/algorithm/XGB" rel="noopener noreferrer">
            XGBoost分类器
          </a>
      },
    ],
  },
  {
    key: 'sub3',
    label: "对比评估",
    icon: <SettingOutlined />,
    children: [
      {
        key: '16',
        label: (
          <a href="/comparison/same" rel="noopener noreferrer">
            同算法同数据集
          </a>
        ),
      },
      {
        key: '17',
        label: (
          <a href="/comparison/different_algorithm" rel="noopener noreferrer">
            不同算法同数据集
          </a>
        ),
      },
      {
        key: '17',
        label: (
          <a href="/comparison/different_dataset" rel="noopener noreferrer">
            同算法不同数据集
          </a>
        ),
      },
    ],
  },
  
  // {
  //   key: 'link',
  //   icon: <LinkOutlined />,
  //   label: (
  //     <a href="/DataFusion" rel="noopener noreferrer">
  //       DataFusion
  //     </a>
  //   ),
  // },
];

export const SidebarWrapper: React.FC = () => {
  return (
    <>
      {/* <Menu
        style={{ width: 256,height:'100vh' ,marginLeft: '0px'}}
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        items={items}
      >
        <Divider style={{  borderWidth: 2 ,borderColor:"#909090",marginRight: '1px' }} />
    </Menu> */}
      <Menu
        style={{
          width: 256,
          height: 'h-full',
          marginLeft: '0px',
          borderRight: '6px solid #d0d0d0',
          flexShrink: 0,
        }}
        defaultSelectedKeys={['1']}
        items={items}
      >
        <Divider />
      </Menu>
    </>
  );
};


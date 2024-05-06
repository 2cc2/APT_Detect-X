'use client';
import React, { FormEvent, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';

const { Content } = Layout;

const items: MenuProps['items'] = [
    {
        label: 'Navigation One',
        key: 'NavigationOne',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'NavigationTwo',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Navigation Three',
        key: 'NavigationThree',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: 'black' }}
            >
                LoginAdmin
            </a>
        ),
        key: '../admin/login',
        icon: <LinkOutlined />,

    },
];

function MyMenu({ children }: any) {
    const [current, setCurrent] = useState('mail');
    const router = useRouter(); // 使用 useRouter 钩子

    const onClick: MenuProps['onClick'] = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
        router.push(e.key); // 添加这一行来实现页面跳转
    };

    return (
        <>
            <div>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    style={{ fontSize: '20px', display: 'flex', justifyContent: 'center', width: '100%', height: '50px' }}
                />
            </div>
            <Content
                style={{
                    margin: '12px',
                    padding: '8px',
                    minHeight: 280,
                    overflow: 'auto',
                }}
            >
                {children}
            </Content>
        </>
    );
};

export default MyMenu;
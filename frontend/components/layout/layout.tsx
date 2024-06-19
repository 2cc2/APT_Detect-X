import React from "react";
import { useLockedBody } from "../hooks/useBodyLock";
import { NavbarWrapper } from "../navbar/navbar";
import { SidebarWrapper } from "../sidebar/sidebar";
import { SidebarContext } from "./layout-context";
import { Breadcrumb } from "antd";
import { HomeOutlined } from '@ant-design/icons';
import { HorizontalNav } from "../footer&hernav/hernav";

interface Props {
  children: React.ReactNode;
}

interface TopNavbarProps {
  setCurrentPage: (page: string) => void;
}

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
      </Breadcrumb>
    </div>
  );
};

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const [currentPage, setCurrentPage] = React.useState('dashboard'); // 添加这一行

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <div style={{ flex: '1 0 auto' }}>
        <HorizontalNav />
      </div>
      <section className="flex flex-col">
        <div className="flex">
            <SidebarWrapper />
          <div className="flex flex-col w-full">
            <TopNavbar setCurrentPage={setCurrentPage} />
            {children}
          </div>
        </div>
      </section>
    </SidebarContext.Provider>
  );
};
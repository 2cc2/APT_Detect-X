import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";
import { LogoutOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  const userMenu = {
    items: [
      { key: '1', title: 'Settings', href: '/settings' },
      { key: '2', title: 'Edit', href: '/edit' }
    ]
  };

  return (
    <aside className="h-screen z-[20] sticky top-0 w-60 flex-shrink-0" style={{ backgroundColor: '#333333' }}>
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      {/* <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      > */}
      {/* <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div> */}
      <div className="flex flex-col justify-between h-full">
        <div className={Sidebar.Body()}>
          <SidebarItem
            title="Home"
            icon={<HomeIcon />}
            isActive={pathname === "/"}
            href="/"
          />
          {/* <SidebarMenu title="Main Menu"> */}
          <SidebarItem
            isActive={pathname === "/dashboard"}
            title="Dashboard"
            icon={<DevIcon />}
            href="dashboard"
          />
          <SidebarItem
            isActive={pathname === "/dataset"}
            title="Dataset"
            icon={<PaymentsIcon />}
            href="dataset"
          />
          <SidebarItem
            isActive={pathname === "/algorithm"}
            title="Algorithm"
            icon={<ReportsIcon />}
            href="algorithm"
          />
          <SidebarItem
            isActive={pathname === "/comparison"}
            title="Comparison"
            icon={<BalanceIcon />}
            href="comparison"
          />
          <SidebarItem
            isActive={pathname === "/DataFusion"}
            title="Data Fusion"
            icon={<ChangeLogIcon />}
            href="DataFusion"
          />
          {/* <SidebarItem
            isActive={pathname === "/customers"}
            title="Comparison with Algorithm"
            icon={<BalanceIcon />}
            href="comparison_algorithm"
          />
          <SidebarItem
            isActive={pathname === "/customers"}
            title="Comparison with Dataset"
            icon={<BalanceIcon />}
            href="comparison_dataset"
          /> */}
          {/* <CollapseItems
                icon={<BalanceIcon />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                title="Balances"
              /> */}
          {/* <SidebarItem
                isActive={pathname === "/products"}
                title="Products"
                icon={<ProductsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/reports"}
                title="Reports"
                icon={<ReportsIcon />}
              /> */}
          {/* </SidebarMenu> */}

          {/* <SidebarMenu title="General">
              <SidebarItem
                isActive={pathname === "/developers"}
                title="Developers"
                icon={<AccountsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/view"}
                title="View Test Data"
                icon={<ViewIcon />}
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Settings"
                icon={<SettingsIcon />}
              />
            </SidebarMenu> */}

          {/* <SidebarMenu title="Updates">
              <SidebarItem
                isActive={pathname === "/changelog"}
                title="Changelog"
                icon={<ChangeLogIcon />}
              />
            </SidebarMenu> */}
        </div>
        <div className={`${Sidebar.Footer()} mb-4`}>
          <Tooltip content={"Logout"} color="primary">
            <a href="/" className="max-w-fit">
              <LogoutOutlined />
            </a>
          </Tooltip>
          <Dropdown menu={userMenu}>
            <Tooltip content={"User"} color="primary">
              <a className="max-w-fit">
                <UserOutlined />
              </a>
            </Tooltip>
          </Dropdown>
        </div>
      </div>
      {/* </div> */}
    </aside>
  );
};

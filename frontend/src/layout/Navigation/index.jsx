import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DollarCircleOutlined,
  SettingOutlined,
  CalculatorOutlined,
  SnippetsOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import ToolbarGrid from "@/pages/ToolbarGrid";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/" />
            Home Page
          </Menu.Item>
          <Menu.Item key="2" icon={<CustomerServiceOutlined />}>
            <Link to="/customer">Customer</Link>
          </Menu.Item>
          <Menu.Item key="24" icon={<UserOutlined />}>
            <Link to="/selectcustomer">Custom Select Customer</Link>
          </Menu.Item>
          <Menu.Item key="21" icon={<FileTextOutlined />}>
            <Link to="/lead" />
            Lead
          </Menu.Item>
          <Menu.Item key="3" icon={<FileSyncOutlined />}>
            <Link to="/projects" />
            Projects
          </Menu.Item>
          <Menu.Item key="33" icon={<DollarCircleOutlined />}>
            <Link to="/budget" />
            Budgets
          </Menu.Item>
          <Menu.Item key="31" icon={<SnippetsOutlined />}>
            {/* <Link to="/report" /> */}
            <a href="http://localhost:3001/products">Report</a>
          </Menu.Item>
          <Menu.Item key="32" icon={<TeamOutlined />}>
            <Link to="/admin" />
            Admins Management
          </Menu.Item>
          {/* <Menu.Item key="4" icon={<FileSyncOutlined />}>
            <Link to="/charts" />
            Charts
          </Menu.Item> */}
          
          <Menu.Item key="4" icon={<FileSyncOutlined />}>
            <Link to="/inventory" />
            Inventory
          </Menu.Item>
          <Menu.Item key="5" icon={<CalculatorOutlined />}>
            <Link to="/salary" />
            Salary
          </Menu.Item>
          {/* <Menu.Item key="5" icon={<FileSyncOutlined />}>
          <Link to="/report" />
            Reports
          </Menu.Item> */}
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;

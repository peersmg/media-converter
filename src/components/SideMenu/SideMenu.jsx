import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { ReloadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    window.require ? setCollapsed(true) : setCollapsed(false);
  }, []);

  return (
    <Sider collapsible collapsed={collapsed} trigger={null}>
      <Menu theme="dark" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<ReloadOutlined />}>
          <Link to="/">Convert</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<InfoCircleOutlined />}>
          <Link to="/data">Data</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;

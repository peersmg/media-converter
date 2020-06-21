import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { FileImageOutlined, VideoCameraOutlined } from "@ant-design/icons";
import "./MainLayout.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";

const { Content, Footer, Sider } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.require ? setCollapsed(true) : setCollapsed(false);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh", userSelect: "none" }}>
      <MainHeader />
      <Layout>
        <Sider collapsible collapsed={collapsed} trigger={null}>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<FileImageOutlined />}>
              <Link to="/">Images</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/videoPage">Video</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            style={{
              margin: "16px 16px",
            }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, height: "80vh", overflow: "auto" }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center", fontSize: 12 }}>v0.1</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

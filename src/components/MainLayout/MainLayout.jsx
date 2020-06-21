import React from "react";
import { Layout } from "antd";
import "./MainLayout.css";
import "antd/dist/antd.css";
import MainHeader from "../MainHeader/MainHeader";
import SideMenu from "../SideMenu/SideMenu";

const { Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh", userSelect: "none" }}>
      <MainHeader />
      <Layout>
        <SideMenu />
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

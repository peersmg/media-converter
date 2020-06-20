import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./MainHeader.css";

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className="header">
      <div className="title">Media Converter</div>
    </Header>
  );
};

export default MainHeader;

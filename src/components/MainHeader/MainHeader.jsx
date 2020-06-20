import React from "react";
import { Layout } from "antd";
import { MinusOutlined, CloseOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./MainHeader.css";

const electron = window.require("electron");

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className="titlebar">
      <div className="title">Media Converter</div>
      <div
        className="exitbutton"
        onClick={() => {
          electron.remote.getCurrentWindow().close();
        }}
      >
        <CloseOutlined />
      </div>
      <div
        className="minimizebutton"
        onClick={() => {
          electron.remote.getCurrentWindow().minimize();
        }}
      >
        <MinusOutlined />
      </div>
    </Header>
  );
};

export default MainHeader;

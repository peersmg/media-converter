import React from "react";
import { Layout } from "antd";
import WindowButtons from "../WindowButtons/WindowButtons";
import "antd/dist/antd.css";
import "./MainHeader.css";

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header
      className="titlebar"
      style={{ position: "fixed", overflow: "auto", top: 0, width: "100vw" }}
    >
      <div className="title">Media Converter</div>
      <WindowButtons />
    </Header>
  );
};

export default MainHeader;

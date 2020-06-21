import React from "react";
import { Layout } from "antd";
import WindowButtons from "../WindowButtons/WindowButtons";
import "antd/dist/antd.css";
import "./MainHeader.css";

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className="titlebar">
      <div className="title">Media Converter</div>
      {window.require ? <WindowButtons /> : null}
    </Header>
  );
};

export default MainHeader;

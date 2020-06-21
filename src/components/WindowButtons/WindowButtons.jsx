import React from "react";
import { MinusOutlined, CloseOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./WindowButtons.css";

const MainHeader = () => {
  const electron = window.require("electron");

  return (
    <div>
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
    </div>
  );
};

export default MainHeader;

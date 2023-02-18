import React from "react";
import { Link } from "react-router-dom";
import "./LeftNavBar.css";

function LeftNavBar() {
  return (
    <div className="LeftNavBar">
      <div className="ContentBox">
        <div className="logo">
          {/* eslint-disable-next-line */}
          <img src={require("./Icons/logo1.png")} />
        </div>
        <div className="serversIcons">
          {/* eslint-disable-next-line */}
          <img src={require("./Icons/icon.png")} />
          {/* eslint-disable-next-line */}
          <img src={require("./Icons/icon.png")} />
          {/* eslint-disable-next-line */}
          <img src={require("./Icons/icon.png")} />
        </div>
        <div className="systemSett">
          {/* eslint-disable-next-line */}
          <Link to={"/JoinServer"}><img src={require("./Icons/icon_createServer.png")} /></Link>
          {/* eslint-disable-next-line */}
          <img src={require("./Icons/icon_setting.png")} />
        </div>
      </div>
    </div>
  );
}

export default LeftNavBar;

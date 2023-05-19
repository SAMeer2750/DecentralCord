import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServerDetails.css";

function ServerDetails({account,user}) {

  return (
    <div className="ServerDetails">
      <div className="image">
          {/* eslint-disable-next-line */}
          <img id="sec" src={require("./Icons/Banner.png")} />
        </div>
      <div className="serverName">
        <div className="name">
          {/* eslint-disable-next-line */}
          <img id="fir" src={require("./Icons/Badge.png")} />
          <p>EthForAll</p>
        </div>
      </div>

      <div className="channels">
        <button>Channel 1</button>
        <button>Channel 2</button>
        <button>Channel 3</button>
        <button>Channel 4</button>
      </div>
      <div className="profile">
        {/* eslint-disable-next-line */}
        <Link to={'/Profile'}>
          <img src={require("./Icons/Profile_Picture.png")} />
        </Link>
        <div className="aboutUser">
          <p className="UserName">{user}</p>
          <p className="address">{account.slice(0, 6) + '...' + account.slice(38, 42)}</p>
        </div>
      </div>
    </div>
  );
}

export default ServerDetails;

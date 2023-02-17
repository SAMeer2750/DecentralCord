import React from "react";
import "./ServerDetails.css";

function ServerDetails() {
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
        <img src={require("./Icons/Profile_Picture.png")} />
        <div className="aboutUser">
          <p className="UserName">First Last</p>
          <p className="address">0x123...123</p>
        </div>
      </div>
    </div>
  );
}

export default ServerDetails;

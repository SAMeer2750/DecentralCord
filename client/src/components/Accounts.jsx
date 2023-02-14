import React from "react";
import "./Accounts.css";
import User from "./User";

function Accounts() {
  return (
    <div className="Accounts">
      <input type="text" placeholder="Search" className="search" />
      <div className="admin">
        <p className="head">Admin</p>
        <User />
      </div>
      <div className="moderators">
        <p className="head">Moderators</p>
        <User />
        <User />
      </div>
      <div className="members">
        <p className="head">Members</p>
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

export default Accounts;

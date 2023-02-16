import React from "react";
import "./User.css";

function User() {
  return (
    <div className="User">
      <div className="userBox">
        {/* eslint-disable-next-line */}
        <img src={require("./Icons/Profile_Picture.png")} />
        <p>First Last</p>
      </div>
    </div>
  );
}

export default User;

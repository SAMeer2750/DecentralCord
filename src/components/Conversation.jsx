import React from "react";
import "./Conversation.css";

function Conversation({user}) {
  return (
    <div className="Conversation">
      <div className="about">
        {/* eslint-disable-next-line */}
        <img src={require("./Icons/Profile_Picture.png")} />
        <p>{user} :</p>
        <p id="time">21:00</p>
      </div>
      <div className="message">Hi, There 👋</div>
    </div>
  );
}

export default Conversation;

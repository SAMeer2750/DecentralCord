import React from "react";
import "./Chating.css";
import Conversation from "./Conversation";

function Chating() {
  return (
    <div className="Chating">
      <div className="ChatBox">
        <div className="chatBoxUp">
          <input id="up" type="text" placeholder="Search chat" />
          <img src="https://cdn-icons-png.flaticon.com/512/9135/9135995.png" alt="" />
        </div>
        <div className="chatBoxDown">
          <Conversation />
          <Conversation />
          <Conversation />
          <div className="sendMessage">
          <input id="down" type="text" placeholder="Your message goes here.."/>
          <img src="https://cdn-icons-png.flaticon.com/512/2099/2099122.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chating;

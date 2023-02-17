import React from "react";
import "./Chat.css";
import Accounts from "../components/Accounts";
import LeftNavBar from "../components/LeftNavBar";
import Chating from "../components/Chating";
import ServerDetails from "../components/ServerDetails";

function Chat() {
  return (
    <div className="Chat">
      <LeftNavBar />
      <ServerDetails/>
      <Chating/>
      <Accounts />
    </div>
  );
}

export default Chat;

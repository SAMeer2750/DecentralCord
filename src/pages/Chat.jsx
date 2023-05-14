import React from "react";
import "./Chat.css";
import Accounts from "../components/Accounts";
import LeftNavBar from "../components/LeftNavBar";
import Chating from "../components/Chating";
import ServerDetails from "../components/ServerDetails";
import { useEffect } from "react";

function Chat({account,contract,user,getUserData}) {

  useEffect(()=>{
    getUserData()
  })
  return (
    <div className="Chat">
      <LeftNavBar />
      <ServerDetails account={account} contract={contract} user={user}/>
      <Chating user={user}/>
      <Accounts />
    </div>
  );
}

export default Chat;

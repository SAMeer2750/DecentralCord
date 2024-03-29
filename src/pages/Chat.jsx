import React from "react";
import "./Chat.css";
import Accounts from "../components/Accounts";
import LeftNavBar from "../components/LeftNavBar";
import Chating from "../components/Chating";
import ServerDetails from "../components/ServerDetails";
import { useEffect } from "react";

function Chat({account,user,getUserData,getUserServers,userServers}) {

  useEffect(()=>{
    getUserData()
    getUserServers()
  },[])
  return (
    <div className="Chat">
      <LeftNavBar userServers={userServers}/>
      <ServerDetails account={account} user={user}/>
      <Chating user={user}/>
      <Accounts account={account} user={user}/>
    </div>
  );
}

export default Chat;

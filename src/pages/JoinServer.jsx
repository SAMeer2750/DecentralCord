import React, { useState } from "react";
import "./JoinServer.css";
import LeftNavBar from "../components/LeftNavBar";

function JoinServer({ account,contract,user }) {

  const [serverName, setServerName] = useState("")
  const [serverId, setServerId] = useState(null)

  function changetextServerName(e) {
    setServerName(e.target.value);
  }

  function changetextServerId(e) {
    setServerId(e.target.value);
  }

  const createServer = async ()=>{
    const createServerTx = await contract.createServer(serverName);
    await createServerTx.wait();
    setServerName("");
  }

  const joinServer = async ()=>{
    const joinServerTx = await contract.enterServer(serverId);
    await joinServerTx.wait();
    setServerId(null);
  }

  return (
    <div className="JoinServer">
      <LeftNavBar />
      <div className="serverBox">
        <div className="allItems">
          <div className="Backbutton">
            {/* eslint-disable-next-line */}
            <img src={require("./Icons/Back_icon.png")} />
          </div>
          <div className="serverBoxes">
            <div className="createServer">
              {/* eslint-disable-next-line */}
              <img src={require("./Icons/logo2.png")} />
              <h2>Create your own Server:</h2>
              <input type="text" placeholder="Enter Server Name"onChange={changetextServerName}/>
              <button onClick={createServer}>Create</button>
            </div>
            <div class="vl"></div>
            <div className="joinserver">
              {/* eslint-disable-next-line */}
              <img src={require("./Icons/join_server_icon.png")} />
              <h2>Join Server:</h2>
              <input type="text" placeholder="Enter Server ID" onChange={changetextServerId}/>
              <button onClick={joinServer}>Enter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinServer;

import React, { useState } from "react";
import "./JoinServer.css";
import LeftNavBar from "../components/LeftNavBar";

function JoinServer({ account,contract,user }) {

  const [serverName, setServerName] = useState("")

  function changetext(e) {
    setServerName(e.target.value);
  }

  const createServer = async ()=>{
    const createServerTx = await contract.createServer(serverName);
    await createServerTx.wait();
    setServerName("")
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
              <input type="text" placeholder="Enter Server Name"onChange={changetext}/>
              <button onClick={createServer}>Create</button>
            </div>
            <div class="vl"></div>
            <div className="joinserver">
              {/* eslint-disable-next-line */}
              <img src={require("./Icons/join_server_icon.png")} />
              <h2>Join Server:</h2>
              <input type="text" placeholder="Enter Server ID"/>
              <button>Enter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinServer;

import React, { useState } from "react";
import "./JoinServer.css";
import LeftNavBar from "../components/LeftNavBar";
import axios from "axios";
import FormData from "form-data";

function JoinServer({ account,contract,user,provider }) {

  const [serverName, setServerName] = useState("");
  const [serverId, setServerId] = useState(null);
  const [file , setFile] =useState(null);
  const [fileName , setFileName] =useState("No Image Selected");

  function changetextServerName(e) {
    setServerName(e.target.value);
  }

  function changetextServerId(e) {
    setServerId(e.target.value);
  }

  const uploadIPFS = async ()=>{
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `c021ec8973f044957914`,
            pinata_secret_api_key: `5d9b710c5667644a4234cbc2fbeb2a6c4157c31d35e79acef79520c78f06a815`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        const signer = contract.connect(provider.getSigner());
        signer.add(account, ImgHash);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  }

  const changeFileServerImg = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };



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
              <input type="file" onChange={changeFileServerImg}/>
              <button onClick={uploadIPFS}>upload IPFS</button>
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

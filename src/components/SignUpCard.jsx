import React, { useState } from "react";
import "./SignUpCard.css";
import { Link } from "react-router-dom";
import { ethers } from 'ethers';

function SignUpCard({account,setAccount,contract}) {

  const [userName, setUserName] = useState(null);

  const connectHandler = async()=>{
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
  }

    function changetext(e) {
    setUserName(e.target.value);
  }

  const createUser = async () => {
    const tx = await contract.createAccount(userName);
    await tx.wait();
  }

  return (

    <div className="SignUpCard">
      <div className="SignUpCardBox">
        {/* eslint-disable-next-line */}
        <img src={require("./image_3.png")} />
        <h1 id="head">Sign In</h1>
        <div className="tagline"><p id="statement">Hurry, Sign in to become a part of Decentral Cord's family.</p></div>
        <input type="text" id="username" placeholder="Username" onChange={changetext}/>
        <button id="sign_up" onClick={createUser}>Sign In</button>

        <hr />

        <p id="already_user">Already a User?</p>

        {
          account ?(
            <button id="connect_wallet">
              {account.slice(0, 6) + '...' + account.slice(38, 42)}{" "}
            </button>
          ):(
            <button id="connect_wallet" onClick={connectHandler}>Connect Wallet</button>
          )
        }

        <Link to="/Chat">
          <button id="connect_wallet_enter">Enter</button></Link>
      </div>
    </div>
  );
}

export default SignUpCard;

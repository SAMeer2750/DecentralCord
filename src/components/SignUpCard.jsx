import React from "react";
import "./SignUpCard.css";
import { Link } from "react-router-dom";
import { ethers } from 'ethers';

function SignUpCard({account,setAccount}) {

  const connectHandler = async()=>{
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
  }

  return (

    <div className="SignUpCard">
      <div className="SignUpCardBox">
        {/* eslint-disable-next-line */}
        <img src={require("./image_3.png")} />
        <h1 id="head">Sign In</h1>
        <div className="tagline"><p id="statement">Hurry, Sign in to become a part of Decentral Cord's family.</p></div>
        <input type="text" placeholder="Username" />
        <Link to="/Chat"><button id="sign_up">Sign In</button></Link>
    
        <hr />
        <p id="already_user">Already a User?</p>
        <Link to="/Chat"><button id="connect_wallet">Connect Wallet</button></Link>
      </div>
    </div>
  );
}

export default SignUpCard;

import React from "react";
import "./SignUpCard.css";
import { Link } from "react-router-dom";
import { ethers } from 'ethers';

function SignUpCard({account,setAccount,contract, setContract}) {

  const connectHandler = async()=>{
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
  }
  // const signInButton = document.getElementById("sign_up");
  // signInButton.addEventListener("click", handleSignIn);
  // const handleSignIn = async ()=>{
  //   const usernameInput = document.querySelector('input[type="text"]').value;
  //   const enterServer = await contract.enterServer(usernameInput).send({ from: account })
  // }
  // signInButton.addEventListener("click", handleSignIn);

  return (

    <div className="SignUpCard">
      <div className="SignUpCardBox">
        {/* eslint-disable-next-line */}
        <img src={require("./image_3.png")} />
        <h1 id="head">Sign In</h1>
        <div className="tagline"><p id="statement">Hurry, Sign in to become a part of Decentral Cord's family.</p></div>
        <input type="text" id="username" placeholder="Username" />
        <Link to="/Chat"><button id="sign_up">Sign In</button></Link>

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

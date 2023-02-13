import React from "react";
import "./SignUpCard.css";

function SignUpCard() {
  return (
    <div className="SignUpCard">
      <div className="SignUpCardBox">
        {/* eslint-disable-next-line */}
        <img src={require("./image_3.png")} />
        <h1 id="head">Sign In</h1>
        <div className="tagline"><p id="statement">Hurry, Sign in to become a part of Decentral Cord's family.</p></div>
        <input type="text" placeholder="Username" />
        <button id="sign_up">Sign In</button>
        <hr />
        <p id="already_user">Already a User?</p>
        <button id="connect_wallet">Connect Wallet</button>
      </div>
    </div>
  );
}

export default SignUpCard;

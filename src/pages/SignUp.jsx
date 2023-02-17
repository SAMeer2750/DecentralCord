import React from "react";
import "./SignUp.css";
import SignUpCard from "../components/SignUpCard";

function SignUp({account,setAccount}) {
  return (
    <div className="SignUp">
      <img className="SignUpBackground" src="./bg_img.png" alt="" />
      <div className="SignUpContent">
        <SignUpCard account={account} setAccount={setAccount}/>
      </div>
    </div>
  );
}

export default SignUp;

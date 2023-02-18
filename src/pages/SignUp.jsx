import React from "react";
import "./SignUp.css";
import SignUpCard from "../components/SignUpCard";

function SignUp({account,setAccount,contract, setContract}) {
  return (
    <div className="SignUp">
      <img className="SignUpBackground" src="./bg_img.png" alt="" />
      <div className="SignUpContent">
        <SignUpCard account={account} setAccount={setAccount} contract={contract} setContract={setContract}/>
      </div>
    </div>
  );
}

export default SignUp;

import React from "react";
import "./SignUp.css";
import SignUpCard from "../components/SignUpCard";

function SignUp() {
  return (
    <div className="SignUp">
      <img className="SignUpBackground" src="./bg_img.png" alt="" />
      <div className="SignUpContent">
        <SignUpCard />
      </div>
    </div>
  );
}

export default SignUp;

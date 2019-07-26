import React from "react";
import "./style.css";
// import Bypass from "./Bypass";
import LoginBtn from "./Navbar";

function Login () {
  return (
    <div className="row">
      <div className="col-5" />
      <h2>Click to login with Google</h2>
    <LoginBtn/>
  {/* <a className="col-2 loginButton" href="/home/">Login</a> */}
  <div className="col-5" />
  </div>
  );
};

export default Login;
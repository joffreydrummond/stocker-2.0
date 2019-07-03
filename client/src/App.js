import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Stocker</h1>
        </div>
        <div><h2>Always Watching</h2></div>
        <p className="App-intro">
          To start watching products, first sign in with Google.
        </p>
        <a href="/auth/google">Sign in with Google</a>
        {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
      </div>
    );
  }
}

export default App;

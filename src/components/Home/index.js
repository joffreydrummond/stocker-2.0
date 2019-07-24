import React from "react";
import Dash from "./Dash";
import News from "./News";
import "./style.css";

function Home () {
  return (
    <div className={"home col-10"}>

      <Dash />

      <br />
      <br />
      <br />

      <News />

    </div>
  );
}

export default Home;
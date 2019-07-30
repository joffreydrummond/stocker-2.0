import React from "react";
import NewsNote from "./NewsNote/index";

function News () {
  return (
    <div className="news">

      <div className="list-group">

        <div className="list-group-item list-group-item-action bg-dark text-white">Notifications</div>

        <NewsNote />

      </div>

    </div>


    
  );
}

export default News;
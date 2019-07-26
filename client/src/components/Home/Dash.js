import React from "react";
import DashNote from "./DashNote";

function Dash () {
  return (
    <div className="dash">

      <div className="list-group">

        <div className="list-group-item list-group-item-action bg-dark text-white">Stocked Items</div>

        <DashNote/>

      </div>

    </div>
    
  );
}

export default Dash;
import React from "react";
import DashNote from "./DashNote";

function Dash () {
  return (
    <div className="row">
    <div className="col-1"></div>
    <table className="dash col-10">
    <div className="row">
      <th className="dashHead col-12">Notifications:</th>
    </div>
      <DashNote />
      <DashNote /> 
      <DashNote /> 
      <DashNote /> 
  
    </table>
    <div className="col-1"></div>
    </div>
    
  );
};

export default Dash;
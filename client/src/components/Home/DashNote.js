import React from "react";
import { Link } from "react-router-dom";

function dashNote () {

  return (
    <div className="dashNote">
      <Link to="/details/" className="list-group-item list-group-item-action">Your Item is in stock</Link>
    </div>
  );
};

export default dashNote;
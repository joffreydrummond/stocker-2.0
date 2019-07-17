import React from "react";

function Input() {
  return (
    <div class="Search">
      <div class="row">
        <div class="col-4"></div>
        <h3 class="searchTitle col-4">Search</h3>
        <div class="col-4"></div>
      </div>

      <div class="row">
        <div class="col-2"></div>
        <input type="text" class="searchInput col-8"></input>
        <div class="col-2"></div>
      </div>

      <div class="row">
        <div class="col-5"></div>
        <button class="searchSubmit col-2"><i class="fas fa-search"></i></button>
        <div class="col-5"></div>
      </div>
    </div>
  );
};

export default Input;
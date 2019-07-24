import React from "react";


function NewsNote () {

  return (
    <div id="accordion">

      <div className="card">
        <div className="card-header">
          <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
            We have a Sale on Weed!!!
          </a>
        </div>
        <div id="collapseTwo" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Come buy some weed - it's less money now and we'll give it to you when you
            give us money. It's an amazing system.
          </div>
        </div>
      </div>

    </div>
  );
};

export default NewsNote;
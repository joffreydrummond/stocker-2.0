import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Details() {

    return (
      <div className="row">
        <div className="col-6">
          <h1>
              Weed Name
          </h1>
          <h4>
              store name
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
          </p>

            <p>
                In stock as of the past
            </p>

            <p>
                $$$
            </p>

            <form>
                <input className="btn btn-primary" type={"button"} value={"Stock This"} />
                <br />
            <br />
            <Link to="/home/">
              <input className="btn btn-dark" type={"button"} value={"Go back!"} />
              </Link>
            </form>

        </div>

        <div className="col-6">

          <img
            className="img-responsive"
            src={require("./weed.jpg")}
            alt={"Sum Weed"}
          />


        </div>
      </div>
    );
}

export default Details;

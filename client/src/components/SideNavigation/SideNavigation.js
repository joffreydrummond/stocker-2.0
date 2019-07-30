import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginBtn from "../Login/LoginBtn";
import Home from "../components/Home/index";
import "./SideNavigation.css";

const sideNav = props => {
  let drawerClasses = "side-nav";
  if (props.show) {
    drawerClasses = "side-nav open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <Router>
          <li>
          <Link>
            <LoginBtn />
          </Link>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
          <Link>
            <LoginBtn />
          </Link>
        </Router>
      </ul>
    </nav>
  );
};

export default sideNav;

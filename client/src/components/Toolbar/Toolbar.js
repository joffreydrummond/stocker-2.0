import React from 'react';
import "../SideNavigation/DrawerToggleBtn"
import "./Toolbar.css"
import DrawerToggleBtn from '../SideNavigation/DrawerToggleBtn';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginBtn from "../Login/LoginBtn";
// import Search from "../Search/Search";
// import Navbar from "./components/Navbar/index";
// import Details from "./components/Details/index";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-toggle-btn" >
                <DrawerToggleBtn click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo"><a href="/">Stocker</a></div>
           <div className="spacer"></div>
            <div className="toolbar-nav-items">
                <ul>
                    <Router>
                    <li><a href="/home">Home</a></li>
                        <li><a href="/search">Search</a></li>
                        {/* <Link>
                    <Search/>
                    </Link> */}
                    <Link>
                    <LoginBtn/>
                    </Link>
                    </Router>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
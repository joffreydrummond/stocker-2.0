import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/index";
import Search from "./components/Search/index";
import Login from "./components/Login/index";
import Details from "./components/Details/index";
import LoginBtn from "./components/Login/Navbar";

function App() {
  return (
    <div className="App">

      <Router>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">

            <a className="navbar-brand" href={"#"}> Stocker </a>

            <ul className="navbar-nav">

              <li className="nav-item">
                <Link to="/home/" className="nav-link"><i className="fas fa-home" /></Link>
              </li>

              <li className="nav-item">
                <Link to="/search/" className="nav-link"><i className="fas fa-search" /></Link>
              </li>
                
              <li className="nav-item">
                <LoginBtn />
              </li>

              </ul>
          

          
          </nav>

        <Route path="/" exact component={Home} />
        <Route path="/search/" component={Search} />
        <Route path={"/details/"} component={Details} />
      </Router>
    
    </div>
  );
}

export default App;
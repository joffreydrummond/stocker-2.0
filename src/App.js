import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/index";
import Search from "./components/Search/index";
import Login from "./components/Login/index";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="row">
          <nav className="col-12">
          Stocker
          <Link to="/search/" className="r"><i class="fas fa-search"></i></Link>
          <Link to="/home/" className="r"><i class="fas fa-home"></i></Link>
          </nav>

        </div>
        <Route path="/" exact component={Login} />
        <Route path="/home/" component={Home} />
        <Route path="/search/" component={Search} />
      </Router>
    </div>
  );
}

export default App;
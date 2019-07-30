import React, {Component} from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Backdrop from "./components/Backdrop/Backdrop";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SideNav from "./components/SideNavigation/SideNavigation";
// import Search from "./components/Search/index";
// import Navbar from "./components/Navbar/index";
// import Details from "./components/Details/index";

class App extends Component {
  state = {
    sideNavOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
  return {sideNavOpen: !prevState.sideNavOpen}
})
  };

  backdropClickHandler = () => {
    this.setState({sideNavOpen: false})
  }
  

  render() {
    let sideNav;
    let backdrop;

    if (this.state.sideNavOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height:"100%"}} >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideNav show={this.state.sideNavOpen} />
        {backdrop}

        <main style={{marginTop:"64px"}}>
          {/* <Router>
            <Home />
            </Router> */}
          <h2 align="center" >Login. Begin Stocking</h2>
        </main>
      </div >
    )
  }
}
export default App;
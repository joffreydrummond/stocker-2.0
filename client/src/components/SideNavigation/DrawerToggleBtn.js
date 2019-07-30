import React from 'react';
import "./DrawerToggleBtn.css";

const DrawerToggleBtn = props => (
    <button className="toggle-btn" onClick={props.click} >
        <div className="toggle-btn-line"/>
        <div className="toggle-btn-line"/>
        <div className="toggle-btn-line"/>
    </button>
);

export default DrawerToggleBtn;
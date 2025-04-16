import React from 'react';
import { Link } from "react-router-dom";
import { MdNotificationsActive } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
// import { MdBusAlert } from "react-icons/md";
import '../css_files/NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2> Way2School </h2>
       
      <ul className="navbar-menu">
        <li><Link to="/homepage">Home</Link></li>
        <li><Link to="/track">Track</Link></li>
        <li><Link to="/notification"><MdNotificationsActive /></Link></li>
        {/* <li><Link to="/alert"><MdBusAlert /></Link></li> */}
        <li><Link to="/profile"><CgProfile /></Link></li>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/aboutus">About us</Link></li> 
        <li></li>
      </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;


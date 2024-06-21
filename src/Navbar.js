import React from 'react';
import './Navbar.css';
import logo from './star-wars-logo.png'

const NavBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="Star Wars Logo" />
            </div>
            <h2>Navigation</h2>
            <a href="#" className="sidebar-link">Home</a>
            <a href="#" className="sidebar-link">Detail</a>
            <a href="#" className="sidebar-link">Profile</a>
        </div>
    );
};

export default NavBar;

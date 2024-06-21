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
            <a href="" className="sidebar-link">Home</a>
            <a href="#" className="sidebar-link">Detail</a>
            <a href="#" className="sidebar-link">Profile</a>
            <div className="sidebar-footer">
                Creado por <a href="https://www.linkedin.com/in/moises-duarte-944b26209/" target="_blank" rel="noopener noreferrer">Moises</a>
            </div>
        </div>
    );
};

export default NavBar;

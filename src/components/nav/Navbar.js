import React, { useState } from 'react';
import './Navbar.css';
import logo from './star-wars-logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-logo">
                    <img src={logo} alt="Star Wars Logo" />
                </div>
                <h2>Navigation</h2>
                <a href="" className="sidebar-link">Home</a>
                <a href="#" className="sidebar-link">Detail</a>
                <a href="#" className="sidebar-link">Profile</a>
                <div className="sidebar-footer">
                    Created by <a href="https://www.linkedin.com/in/moises-duarte-944b26209/" target="_blank" rel="noopener noreferrer">Moises</a>
                </div>
            </div>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? 'Hide Sidebar' : 'Show Sidebar'}
            </button>
        </>
    );
};

export default NavBar;
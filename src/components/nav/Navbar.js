import React, { useState } from 'react';
import './Navbar.css';
import logo from './star-wars-logo.png';
import { Link } from 'react-router-dom';

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
                <Link to="/" className="sidebar-link">Home</Link>
                <Link to="/detail" className="sidebar-link">Detail</Link>
                <Link to="/profile" className="sidebar-link">Profile</Link>

                <div className="sidebar-footer">
                    Created by <a href="https://www.linkedin.com/in/moises-duarte-944b26209/" target="_blank" rel="noopener noreferrer">Moises</a>
                </div>
            </div>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? '=' : '='}
            </button>
        </>
    );
};

export default NavBar;
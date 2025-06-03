/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Layout/layout.css';
import SwitchToggle from '../SwitchToggle/SwitchToggle'; // Import the SwitchToggle component

// Importing Logo....
import Logo from '../Assets/logo.png';
import '../../App.css';
import axios from 'axios';

const Navbar = () => {
    // Check if the user is already logged in using localStorage
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true); // Track loading state

    // Fetch the user's name if logged in
    useEffect(() => {
        if (isLoggedIn) {
            axios.get('http://localhost:3001/user', { withCredentials: true })
                .then(response => {
                    setUserName(response.data.name);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                    setLoading(false);
                });
        }
    }, [isLoggedIn]);

    // Handle login functionality
    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');  // Save the login state in localStorage
    };

    // Handle logout functionality
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');  // Save the logout state in localStorage
        window.location.reload(); // Refresh the page to clear data
    };

    // Fetch the user's name from the API after login
    useEffect(() => {
        if (isLoggedIn) {
            axios.get('http://localhost:5000/api/user', { withCredentials: true })
                .then((response) => {
                    setUserName(response.data.name);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching user:', error);
                    setLoading(false);
                });
        }
    }, [isLoggedIn]);

    // Updating the page title when clicking the logo
    const handleClick = () => {
        document.title = '365 POSTS';
    };

    return (
        <nav className={`navbar navbar-expand-lg bg_nabvar shadow-lg sticky-top`}>
            <div className="container-fluid d-flex justify-content-around">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" onClick={handleClick} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
                        {!isLoggedIn ? (
                            <li className="nav-item links">
                                <NavLink to="/" className="nav-link" onClick={handleClick}>HOME</NavLink>
                            </li>
                        ) : (
                            <div className="collapse navbar-collapse toggle_mode_btn" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
                                    <li className="nav-item links">
                                        <NavLink to="/news" className="nav-link">NEWS</NavLink>
                                    </li>
                                    <li className="nav-item links">
                                        <NavLink to="/blogs" className="nav-link">BLOGS</NavLink>
                                    </li>
                                </ul>
                                <div className="d-flex gap-3">
                                    <SwitchToggle />
                                    <a className="btn btn-primary">
                                        {loading ? 'Loading...' : `Hi, ${userName}`}
                                    </a>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>

                {!isLoggedIn ? (
                    <NavLink to="/login" className="btn btn-primary" activeClassName="active" onClick={handleLogin}>
                        <i className="fa-solid fa-user"></i> Login
                    </NavLink>
                ) : (
                    <button className="btn btn-primary" onClick={handleLogout}>
                        <i className="fa-solid fa-sign-out-alt"></i><Link to="/" className="text-white"> Logout</Link>
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

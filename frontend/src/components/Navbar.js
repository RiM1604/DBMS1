import React from 'react';
import "./CSS/Navbar.css";
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <Link to="/signup">
                    <li>Create Account</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
                <Link to="/">
                    <li>Home</li>
                </Link>
            </ul>
        </div>
    )
}

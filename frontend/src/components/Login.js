import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Login.css';
export default function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <Link to="/student_login">
                    <ul>Student Login</ul>
                </Link>
                <Link to="/organizer_login">
                    <ul>Organizer Login</ul>
                </Link>
                <Link to="/admin_login">
                    <ul>Admin Login</ul>
                </Link>
                <Link to="/other_login">
                    <ul>Other Login</ul>
                </Link>
                <Link to="/"><ul>Home</ul></Link>
            </div>
        </div>
    )
}

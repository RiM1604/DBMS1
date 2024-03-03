import React from 'react';
import "./CSS/SignUp.css";
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className="signUp">
            <div className="signUp-container">
                <Link to="/student_signup"><ul>Student Signup</ul></Link>
                <Link to="/organizer_signup"><ul>Organizer Signup</ul></Link>
                <Link to="/admin_signup"><ul>Admin Signup</ul></Link>
                <Link to="/other_signup"><ul>Other Signup</ul></Link>
                <Link to="/"><ul>Home</ul></Link>
            </div>
        </div>
    )
}

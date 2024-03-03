import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/Home.css";
export default function Home() {



    return (
        <div className="home">
            <div className="home-container">
                <h1><ul>Home Page</ul></h1>
                <Link to="/signup"><ul>SignUp</ul></Link>
                <Link to="/login"><ul>Login</ul></Link>
                <Link to="/events"><ul>Events</ul></Link>

            </div>

        </div>
    )
}

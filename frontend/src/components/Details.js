import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CSS/Details.css';

export default function Details(props) {
    const location = useLocation();
    const data = location.state.data;

    console.log(data);

    return (
        <div className='details'>Details
            <div className='details-container'>
                <h1>{data.e_name}</h1>
                <h2>{data.event_date}</h2>
                <h3>{data.venue}</h3>
                <h4>{data.type}</h4>
                <Link to="/student_page" className="back-btn">Back</Link>
            </div>
        </div>


    )
}

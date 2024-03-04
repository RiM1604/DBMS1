import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CSS/Details.css';

export default function Details(props) {
    const location = useLocation();
    const { data, userdata } = location.state;
    // const userdata = location.state.userdata;
    console.log(userdata);
    // console.log(userdata);

    return (
        <div className='details'>Details
            <div className='details-container'>
                <h1>{data.e_name}</h1>
                <h2>{data.event_date}</h2>
                <h3>{data.venue}</h3>
                <h4>{data.type}</h4>
                <h5>{userdata.rollNo}</h5>
                {
                    userdata.userType === "student" && (
                        <Link to="/student_page" className="back-btn">Back</Link>)

                }
                {userdata.userType === "organizer" && (<Link to="/organizer_page" className="back-btn">Back</Link>)}
                {userdata.userType === "other" && (<Link to="/other_page" className="back-btn">Back</Link>)}

            </div>
        </div>


    )
}

import React, { useEffect, useState } from 'react';
import "./CSS/VolunteerDetails.css";
import { Link } from 'react-router-dom';

export default function VolunteerDetails() {

    const [VolunteerData, setVolunteerData] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:5000/volunteer_details');
        const data = await response.json();
        console.log(data);
        setVolunteerData(data);
    }



    useEffect(() => {
        getData();
    }, [])

    return (
        <div>VolunteerDetails

            {
                VolunteerData.map((item, index) => {
                    console.log(item);
                    return (
                        <div key={index} className="dynamic-div2">
                            {/* <h2>{item.name}</h2> */}
                            <h3>RollNo: {item.roll}</h3>
                            <h3>Name: {item.name}</h3>
                            <h3>Dept: {item.dept}</h3>

                            {/* <h2>{item.email}</h2>
                            <h2>{item.phone}</h2>
                            <h2>{item.branch}</h2>
                            <h2>{item.year}</h2>
                            <h2>{item.collegeName}</h2> */}
                        </div>
                    )
                })
            }
            <div className="back">
                <Link to="/organizer_page"><span>Back</span></Link>
            </div>
        </div>
    )
}

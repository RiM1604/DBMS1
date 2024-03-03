import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import axios from 'axios';


export default function Event() {

    const [eventData, setEventData] = useState([]);
    useEffect(() => {
        console.log("page loaded");
        const showEvents = async () => {

            try {
                const response = await fetch("http://localhost:5000/get_events");
                const result = await response.json();
                console.log(result);
                setEventData(result);
            } catch (error) {
                console.log("Dont know what error");
                console.log(error.message);
            }
        }
        showEvents();
    }, [])

    return (
        <div className="event">
            {/* Events */}
            {

                eventData.map((item, index) => {

                    return (
                        <div key={index} className="dynamic-div">
                            <h2>{item.e_name}</h2>
                        </div>
                    )
                })
            }
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

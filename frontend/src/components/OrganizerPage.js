import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./CSS/OrganizerPage.css";

export default function OrganizerPage(props) {
  const data = props.login;
  console.log(data);
  const [eventData, setEventData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("page loaded");
    const showEvents = async () => {

      try {
        const response = await fetch("http://localhost:5000/get_events");
        const result = await response.json();
        // console.log(result);
        setEventData(result);
      } catch (error) {
        console.log("Dont know what error");
        console.log(error.message);
      }
    }
    showEvents();
  }, [])




  return (
    <div className="StudentPage">
      <div className="header">
        <h1>Organizer Page</h1>
        <div className="logout">
          <button className="logout-btn" onClick={() => {
            localStorage.clear();
            console.clear();
            navigate('/');
          }}>Logout</button>

        </div>
      </div>
      <div className="event">
        {

          eventData.map((item, index) => {

            return (

              <div key={index} className="dynamic-div">
                <h2>{item.e_name}</h2>
                {/* <h2>{item.eid}</h2>
                <h2>{item.type}</h2> */}
                {/* <input type="submit" value="Register" onClick={() => {
                  handleRegister();
                }} /> */}
                <div className="options">
                  {/* <div className="register-link">
                   
                    <span id={"register" + item.eid} onClick={() => {
                      handleRegister(item);
                    }}>Register</span>
                  </div> */}
                  <div className="details-btn">
                    <Link to="/details" state={{ data: item, userdata: data }} className="details-link">Details</Link>
                  </div>
                  <div className="volunteer-details-btn">
                    <Link to="/volunteer_details" state={{ data: item, userdata: data }} className="volunteer-details-link">Volunteer Details</Link>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>

    </div>
  )
}

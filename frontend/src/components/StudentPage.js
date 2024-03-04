import React from 'react'
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CSS/StudentPage.css';
import { useNavigate } from 'react-router-dom';

export default function StudentPage(props) {

  const data = props.login;
  // console.log(data);
  const [eventData, setEventData] = useState([]);
  const [RegisteredEvents, setRegisteredEvents] = useState([]);
  const [isVolunteering, setIsVolunteering] = useState(false);
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

    const getRegisteredEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/registered_events", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rollNo: data.rollNo
          })
        });
        const result = await response.json();
        console.log(result);
        const eidsOnly = result.map(item => item.eid);
        setRegisteredEvents(eidsOnly);
        // if (result.length > 0) {
        //   setIsRegistered(true);
        // }
      } catch (error) {
        console.log("Dont know what error");
        console.log(error.message);
      }
    }

    const getVolunteeringStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/volunteering_status", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rollNo: data.rollNo
          })
        });
        const result = await response.json();
        console.log(result);
        if (result.length > 0) {
          setIsVolunteering(true);
        }
      } catch (error) {
        console.log("Dont know what error");
        console.log(error.message);
      }
    }


    getVolunteeringStatus();
    getRegisteredEvents();
    showEvents();
  }, [])

  const handleRegister = (item) => {
    console.log(item);
    console.log(data.rollNo);
    console.log(item.eid);
    //send the info that this user is registered for this event
    //event id from item.eid and student id from data.rollNo
    //make a post call to server to register the student for the event
    fetch("http://localhost:5000/register_event", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eid: item.eid,
        rollNo: data.rollNo
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data);
      })


    console.log('register' + item.eid);
    const spanElement = document.getElementById('register' + item.eid);
    if (spanElement) {
      spanElement.textContent = "Registered";
    }
  }

  const handleVolunteer = () => {
    console.log("Volunteer");

    fetch("http://localhost:5000/volunteer", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rollNo: data.rollNo
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data);
      })
    //send the info that this user is volunteering
    const spanElement = document.getElementById("volunteering");
    if (spanElement) {
      spanElement.textContent = "Volunteering";
    }
  }
  const isEventRegistered = (eid) => {
    return RegisteredEvents.includes(eid);
  }


  return (
    <div className="StudentPage">
      <div className="header">
        <h1 >Student Page
        </h1>
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
                  <div className="register-link">
                    {/* <Link to="/register" state={{ data: item }}><span>Register</span></Link> */}
                    {
                      isEventRegistered(item.eid) ? (
                        <span>Registered</span>
                      ) : (
                        <span id={"register" + item.eid} onClick={() => {
                          handleRegister(item);
                        }}>Register</span>
                      )
                    }
                    {/* <span id={"register" + item.eid} onClick={() => {
                      handleRegister(item);
                    }}>Register</span> */}
                  </div>
                  <div className="details-btn">
                    <Link to="/details" state={{ data: item, userdata: data }} className="details-link">Details</Link>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>

      <div className="volunteer-btn">
        {
          isVolunteering ? (
            <span>Volunteering</span>
          ) : (
            <span id="volunteering" onClick={() => {
              handleVolunteer();
            }}>Volunteer</span>
          )
        }
      </div>

    </div>
  )
}

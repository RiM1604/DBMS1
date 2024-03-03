import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function OrganizerPage(props) {
  const data = props.login;
  console.log(data);
  const [eventData, setEventData] = useState([]);
  // const navigate = useNavigate();
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

  const handleRegister = (item) => {
    console.log(item);

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


  return (
    <div classNam e="StudentPage">
      <h1>Organizer Page</h1>
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
                </div>

              </div>
            )
          })
        }
      </div>

      <div className="volunteer-btn">
        <span id="volunteering" onClick={() => {
          handleVolunteer();
        }}>Volunteer</span>
      </div>

    </div>
  )
}

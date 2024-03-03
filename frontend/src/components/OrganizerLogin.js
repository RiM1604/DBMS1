import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
export default function OrganizerLogin() {

    // const [name, setName] = useState("");
    const [organizerID, setorganizerID] = useState("");
    const [password, setPassword] = useState("");
    const { LoginData, setLoginData } = useContext(LoginContext);
    const navigate = useNavigate();


    const postData = () => {
        // console.log(name, rollNo, password);
        // console.log(name);
        console.log(organizerID);
        console.log(password);
        fetch("http://localhost:5000/organizer_login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // name: name,
                organizerID: organizerID,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log("error");
                } else {
                    console.log(data);
                    //add password check here if wrong redirect to the same page.
                    console.log(organizerID);
                    setLoginData({ organizerID: organizerID, userType: "organizer" });
                    navigate('/organizer_page');
                }
            })
    }

    return (
        <div>OrganizerLogin
            <div className="organizerLogin">
                <div className="form">

                    <div>
                        <input type="text" name="id" id="idLogin" placeholder="Organizer ID" value={organizerID} onChange={(e) => { setorganizerID(e.target.value) }} />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div>
                        <input type="submit" value="Login" onClick={() => {
                            postData();
                        }} />
                    </div>
                </div>
                <div><Link to="/">Home</Link></div>
            </div>
        </div>
    )
}

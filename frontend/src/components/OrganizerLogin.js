import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
export default function OrganizerLogin() {
    const [organizerID, setorganizerID] = useState("");
    const [password, setPassword] = useState("");
    const { LoginData, setLoginData } = useContext(LoginContext);
    const navigate = useNavigate();
    const postData = () => {
        fetch("http://localhost:5000/organizer_login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                organizerID: organizerID,
                password: password
            })
        }).then(res => res.json()).then(res => {
                if (res.error) {
                    console.log("error");
                }
                else if(res.message==='No such user found.'){
    
                }
                else if(res.message==='Wrong password.'){
    
                }
                else{
                    setLoginData({ organizerID: organizerID, userType: "organizer" });
                    navigate('/organizer_page')
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

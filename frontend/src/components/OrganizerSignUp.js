import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function OrganizerSignUp() {
    const [organizerID, setorganizerID] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const postData = () => {
        fetch("http://localhost:5000/organizer_signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                organizerID: organizerID,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log("error");
                } else {
                    console.log(data);
                    navigate('/');
                }
            })
    }


    return (
        <div className="organizerSignUp" >
            <div className="organizerSignUp-container">

                <div className="form">
                    <div>
                        <input type="text" name="organizer_id" id="organizer_id" placeholder="Organizer ID" value={organizerID} onChange={(e) => { setorganizerID(e.target.value) }} />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div>
                        <input type="submit" value="Sign Up" onClick={() => {
                            postData();
                        }} />
                    </div>
                </div>



                <div><Link to="/">Home</Link></div>
            </div>
        </div>
    )
}

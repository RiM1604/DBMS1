import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./CSS/AdminSignUp.css";
import { useNavigate } from 'react-router-dom';
export default function AdminSignUp() {


    const [name, setName] = useState("");
    const [adminID, setAdminID] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const postData = () => {
        // console.log(name, rollNo, password);
        console.log(name);
        console.log(adminID);
        console.log(password);
        fetch("http://localhost:5000/admin_signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                adminID: adminID,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log("error");
                } else {
                    console.log(data);
                    //store the data of the signup of the user
                    navigate('/');
                }
            })
    }


    return (
        <div className="adminSignUp">
            <div className="adminSignUp-container">
                <div className="form">
                    <div className="form">
                        <div>
                            <input type="name" name="name" id="name" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div>
                            <input type="text" name="admin_id" id="admin_id" placeholder="Admin ID" value={adminID} onChange={(e) => { setAdminID(e.target.value) }} />
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

                </div>
            </div>
            <div><Link to="/">Home</Link></div>
        </div>

    )
}

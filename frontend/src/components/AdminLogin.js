import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [adminID, setAdminID] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const postData = () => {
        fetch("http://localhost:5000/admin_login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                adminID: adminID,
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
                    navigate('/admin_page')
                }
            })
    }

    return (
        <div>AdminLogin
            <div className="adminLogin">
                <div className="form">
                    <div>
                        <input type="text" name="id" id="idLogin" placeholder="Admin ID" value={adminID} onChange={(e) => { setAdminID(e.target.value) }} />
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

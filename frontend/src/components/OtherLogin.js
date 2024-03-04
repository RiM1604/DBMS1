import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

export default function OtherLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const { LoginData, setLoginData } = useContext(LoginContext);
    const navigate = useNavigate();

    const postData = () => {
        fetch("http://localhost:5000/other_login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json()).then(res => {
            if (res.error) {
                console.log("error");
            }
            else if (res.message === 'No such user found.') {

            }
            else if (res.message === 'Wrong password.') {

            }
            else {
                setLoginData({ email: email, userType: "other" });
                navigate('/other_page')
            }
        })
    }
    return (
        <div>OtherLogin
            <div className="otherLogin">
                <div className="form">
                    <div>
                        <input type="email" name="email" id="emailLogin" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
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

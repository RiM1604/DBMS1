import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function OtherLogin() {
    // const [name, setName] = useState("");
    // const [collegeName, setCollegeName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const postData = () => {
        // console.log(name, collegeName, password);
        // console.log(name);
        // console.log(collegeName);
        console.log(email);
        console.log(password);
        fetch("http://localhost:5000/other_login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // name: name,
                // collegeName: collegeName,
                email: email,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log("error");
                } else {
                    console.log(data);
                    //add password check here if wrong redirect to the same page.
                    navigate('/other_page');
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

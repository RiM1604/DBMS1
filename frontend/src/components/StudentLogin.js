import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./CSS/StudentLogin.css";
import { useNavigate } from 'react-router-dom';
export default function StudentLogin() {
    const [rollNo, setRollNo] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const postData = () => {
        // console.log(name, rollNo, password);
        // console.log(name);
        console.log(rollNo);
        console.log(password);
        fetch("http://localhost:5000/student_login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rollNo: rollNo,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log("error");
                } else {
                    console.log(data);
                    //add password check here if wrong redirect to the same page.
                    navigate('/student_page');
                }
            })
    }

    return (
        <div>StudentLogin
            <div className="studentLogin">
                <div className="form">

                    <div>
                        <input type="text" name="rollNo" id="rollNoLogin" placeholder="Roll No" value={rollNo} onChange={(e) => { setRollNo(e.target.value) }} />
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

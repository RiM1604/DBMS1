import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import "./CSS/StudentLogin.css";
export default function StudentLogin() {
    const [rollNo, setRollNo] = useState("");
    const [password, setPassword] = useState("");
    const { LoginData, setLoginData } = useContext(LoginContext);
    const navigate = useNavigate();
    const postData = () => {
        fetch("http://localhost:5000/student_login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rollNo: rollNo,
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
                setLoginData({ rollNo: rollNo, userType: "student" });
                navigate('/student_page')
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

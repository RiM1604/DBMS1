import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function StudentSignUp() {
    const [dept, setDept] = useState("");
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const postData = () => {
        fetch("http://localhost:5000/student_signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                rollNo: rollNo,
                password: password,
                dept: dept
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
        <div className="studentSignUp">
            <div className="studentSignUp-container">

                <div className="form">
                    <div>
                        <input type="name" name="name" id="name" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <input type="text" name="rollno" id="rollnoSignUp" placeholder="Roll No" value={rollNo} onChange={(e) => { setRollNo(e.target.value) }} />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div>
                        <input type="dept" name="dept" id="dept" placeholder="Department" value={dept} onChange={(e) => { setDept(e.target.value) }} />
                    </div>
                    <div>
                        <input type="submit" onClick={() => {
                            postData()
                        }} value="Sign Up" />
                    </div>

                </div>
                <div><Link to="/">Home</Link></div>
            </div>
        </div>
    )
}

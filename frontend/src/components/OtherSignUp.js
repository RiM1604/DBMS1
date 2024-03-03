import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function OtherSignUp() {

    const [name, setName] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const postData = () => {
        // console.log(name, collegeName, password);
        console.log(name);
        console.log(collegeName);
        console.log(email);
        console.log(password);
        fetch("http://localhost:5000/other_signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                collegeName: collegeName,
                email: email,
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
        <div className="otherSignUp">
            <div className="otherSignUp-container">
                {/* <div>OtherSignUp</div> */}
                <div className="form">
                    <div>
                        <input type="name" name="name" id="name" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <input type="name" name="name" id="name" placeholder="College Name" value={collegeName} onChange={(e) => { setCollegeName(e.target.value) }} />
                    </div>
                    <div>
                        <input type="email" name="email" id="emailSignUp" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
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

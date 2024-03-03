import React from 'react'
import { useLocation } from 'react-router-dom';
export default function Register(props) {

    const location = useLocation();
    // const { props } = props;
    // console.log(props);
    const data = location.state.data;
    console.log(data);

    return (
        <div>Register</div>
    )
}

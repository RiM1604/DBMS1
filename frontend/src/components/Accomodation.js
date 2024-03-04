import React from 'react'
import { Link } from 'react-router-dom';
export default function Accomodation() {
    return (
        <div>
            <h2>Accomodation Booking</h2>
            <div><Link to="/other_page" className='back-btn'>Back</Link></div>
        </div>
    )
}

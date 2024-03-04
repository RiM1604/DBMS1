import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function AdminPage() {
  const navigate=useNavigate();
  return (
    <div>
    <button className='other_participants' onClick={()=>{navigate('/admin_other')}}>other</button>
    <button className='student' onClick={()=>{navigate('/admin_student')}}>students</button>
    <button className='organizers' onClick={()=>{navigate('/admin_org')}}>organizers</button>
    </div>
  )
}

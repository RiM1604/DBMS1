import './App.css';
// import axios from 'axios';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Home from './components/Home';
import React, { createContext, useState } from 'react';
import { LoginContext } from './context/LoginContext';
// import Navbar from './components/Navbar';

import Login from './components/Login';
import SignUp from './components/SignUp';
import StudentSignUp from './components/StudentSignUp';
import OrganizerSignUp from './components/OrganizerSignUp';
import AdminSignUp from './components/AdminSignUp';
import OtherSignUp from './components/OtherSignUp';
import Events from './components/Events';
import StudentLogin from './components/StudentLogin';
import OrganizerLogin from './components/OrganizerLogin';
import AdminLogin from './components/AdminLogin';
import OtherLogin from './components/OtherLogin';
import StudentPage from './components/StudentPage';
import AdminPage from './components/AdminPage';
import OrganizerPage from './components/OrganizerPage';
import OtherPage from './components/OtherPage';
import Register from './components/Register';
import Details from './components/Details';
import VolunteerDetails from './components/VolunteerDetails';
import Accomodation from './components/Accomodation';
import Admin_student from './components/Admin_student';
import Admin_org from './components/Admin_org';
import Admin_other from './components/Admin_other';
function App() {

  const [LoginData, setLoginData] = useState({})
  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ LoginData, setLoginData }}>
        <div className="App">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/student_signup" element={<StudentSignUp />}></Route>
            <Route path="/organizer_signup" element={<OrganizerSignUp />}></Route>
            <Route path="/admin_signup" element={<AdminSignUp />}></Route>
            <Route path="/other_signup" element={<OtherSignUp />}></Route>
            <Route path="/student_login" element={<StudentLogin />}></Route>
            <Route path="/organizer_login" element={<OrganizerLogin />}></Route>
            <Route path="/admin_login" element={<AdminLogin />}></Route>
            <Route path="/other_login" element={<OtherLogin />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/student_page" element={<StudentPage login={LoginData} />}></Route>
            <Route path="/admin_page" element={<AdminPage />}></Route>
            <Route path="/organizer_page" element={<OrganizerPage login={LoginData} />}></Route>
            <Route path="/other_page" element={<OtherPage login={LoginData} />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/details" element={<Details />}></Route>
            <Route path="/volunteer_details" element={<VolunteerDetails />}></Route>
            <Route path="/accomodation" element={<Accomodation />}></Route>
            <Route path="/admin_student" element={<Admin_student />}></Route>
            <Route path="/admin_org" element={<Admin_org />}></Route>
            <Route path="/admin_other" element={<Admin_other />}></Route>
          </Routes>
        </div>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;

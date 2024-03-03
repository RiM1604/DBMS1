import './App.css';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
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

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/student_page" element={<StudentPage />}></Route>
          <Route path="/admin_page" element={<AdminPage />}></Route>
          <Route path="/organizer_page" element={<OrganizerPage />}></Route>
          <Route path="/other_page" element={<OtherPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

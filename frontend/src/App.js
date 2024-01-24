import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { HeaderNavComp } from "./components/HeaderNavComp";
import BookingTerms from "./pages/BookingTerms";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import { Flight } from "./pages/Customer/Flight";
import Reservation  from "./pages/Customer/Reservation";
import FlightListPage from "./pages/Customer/FlightListPage";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />

        <Route path="/booking-terms" element={<BookingTerms />} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/contactUs" element = {<ContactUs/>} />
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Register/>} />
        <Route path = "/flight" element ={<Flight/>}/>
        <Route path = "/reservation" element= {<Reservation/>}/>
        <Route path = "/flight-list" element = {<FlightListPage/>}/>
        
       
        
      </Routes>
    </Router>
  );
}

export default App;

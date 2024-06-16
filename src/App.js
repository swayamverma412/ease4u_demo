import React from 'react';
import Home from './Component/pages/home'; // Adjust path as per your actual file structure
import Login from './Component/pages/Login'; // Adjust path as per your actual file structure
import ContactUs from './Component/pages/ContactUs';
import GlobalStyles from './styles/GlobalStyles'; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}


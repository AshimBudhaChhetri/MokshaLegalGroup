import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutpage from "./components/AboutPage/Aboutpage";
import Services from "./components/Services/Services";
import Contactpage from "./components/Contact/Contactpage";
import Homepage from "./components/Homepage/Homepage"; // Homepage
import Attorney from "./components/Attorney/Attorney";
import Navbar from "./components/Homepage/Navbar/Navbar"; // Navbar
import Footer from "./components/Footer/Footer"; // Footer
import Publications from "./components/Publications/Publications";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactpage" element={<Contactpage />} />
        <Route path="/attorney" element={<Attorney />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

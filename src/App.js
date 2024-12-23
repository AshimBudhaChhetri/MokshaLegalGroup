import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Homepage/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

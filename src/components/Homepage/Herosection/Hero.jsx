import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="hero-image"></div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="hero-text">
                <h1>Your Legal Counsel</h1>
                <div className="hero-btn">
                  <button className="hero-appointment">Get Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

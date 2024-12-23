import React from "react";
import "./Practice.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Practice = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Display one card at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="practice-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="practice-content">
              <h6 className="practice-subtitle">Our Practices</h6>
              <h2 className="practice-title">Our Practice Areas</h2>
              <p className="practice-text">
                Our Practice Areas include Civil Law for disputes, Family Law
                for domestic matters, Business Law for corporate needs, and
                Criminal Law for strong defense. We offer professional, reliable
                legal solutions tailored to your needs with care and expertise.
              </p>
              <button className="button-service">More Services</button>
            </div>
          </div>

          {/* Right Side Carousel */}
          <div className="col-lg-8 col-md-12">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              arrows={true}
              showDots={true}
            >
              <div className="card">
                <div className="card-body text-center">
                  <h5>Family Law</h5>
                  <p>Legal solutions for domestic and family matters.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <h5>Business Law</h5>
                  <p>Corporate legal advice and solutions.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <h5>Criminal Law</h5>
                  <p>Strong legal defense for criminal cases.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <h5>Civil Law</h5>
                  <p>Legal expertise for civil disputes.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;

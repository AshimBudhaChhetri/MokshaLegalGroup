import React from "react";
import "./Cta.scss";

const Cta = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10 text-center">
            <div className="cta-content">
              <h2 className="cta-title">
                Let's get started. Call us now for a <br />
                Free Consultation
              </h2>
              <button className="btn btn-gold mt-3">Call Us Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;

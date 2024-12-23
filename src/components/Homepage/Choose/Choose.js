import React from "react";
import "./Choose.scss";
import chooseimg from "../../../../src/Assets/img/feature.jpg";

const Choose = () => {
  return (
    <div className="choose-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={chooseimg} // Replace with your actual image path
              alt="Why Choose Us"
              className="img-fluid rounded"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6">
            <h6 className="text-uppercase text-muted">Our Features</h6>
            <h2 className="fw-bold">Why Choose Us</h2>
            <div className="features-list mt-4">
              <div className="feature-item d-flex align-items-center mb-3">
                <div className="feature-number bg-gold text-white rounded-circle d-flex justify-content-center align-items-center me-3">
                  01
                </div>
                <p className="mb-0">Best Law Practices</p>
              </div>
              <div className="feature-item d-flex align-items-center mb-3">
                <div className="feature-number bg-gold text-white rounded-circle d-flex justify-content-center align-items-center me-3">
                  02
                </div>
                <p className="mb-0">Efficiency & Trust</p>
              </div>
              <div className="feature-item d-flex align-items-center mb-3">
                <div className="feature-number bg-gold text-white rounded-circle d-flex justify-content-center align-items-center me-3">
                  03
                </div>
                <p className="mb-0">Results You Deserve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

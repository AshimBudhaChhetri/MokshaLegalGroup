import React from "react";
import { motion } from "framer-motion";
import "./Choose.scss";
import chooseimg from "../../../../src/Assets/img/feature.jpg";

const Choose = () => {
  return (
    <div className="choose-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Image */}
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
            <img
              src={chooseimg}
              alt="Why Choose Us"
              className="img-fluid rounded"
            />
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.4,
            }}
            viewport={{ once: false }}
          >
            <div className="right-side-content">
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

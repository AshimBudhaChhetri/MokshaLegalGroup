import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        {/* Top Row */}
        <div className="row text-center text-lg-start mb-5">
          {/* Office */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-card">
              <i className="bi bi-geo-alt fs-3"></i>
              <h5 className="mt-3">Our Office</h5>
              <p>Anamnagar-29, Kathmandu, Nepal</p>
            </div>
          </div>
          {/* Email */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-card">
              <i className="bi bi-envelope fs-3"></i>
              <h5 className="mt-3">Email Us</h5>
              <p>office@mokshalegalgroup.com</p>
            </div>
          </div>
          {/* Call */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-card">
              <i className="bi bi-telephone fs-3"></i>
              <h5 className="mt-3">Call Us</h5>
              <p>+977 9863472265</p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row text-center text-lg-start">
          {/* Logo and Description */}
          <div className="col-lg-4 col-md-12 mb-4">
            <img
              src="logo.png" // Replace with your logo path
              alt="MOK Legal Group"
              className="img-fluid mb-3"
            />
          </div>
          {/* Popular Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Popular Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#attorney">Attorney</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
              <li>
                <a href="#terms">Terms</a>
              </li>
              <li>
                <a href="#privacy">Privacy</a>
              </li>
              <li>
                <a href="#sitemap">Site Map</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

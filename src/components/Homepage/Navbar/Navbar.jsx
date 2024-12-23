import React from "react";
import "./Navbar.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="logo.png" // Replace with your logo URL or path
            alt="Logo"
            width="50"
            height="50"
          />
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#attorney">
                Attorney
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#publications">
                Publications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Home.css";
import logo from "../Assets/img/Moksha logo.png";
import img1 from "../Assets/img/carousel-1.jpg";
import img2 from "../Assets/img/carousel-2.jpg";
import img4 from "../Assets/img/feature.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpenText,
  faPhone,
  faEnvelope,
  faUsers,
  faHandHolding,
  faHandHoldingUsd,
  faLandmark,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For devices <768px width
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For devices <480px width
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* <!-- Header start --> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 bg-secondary d-none d-lg-block">
            <a
              href="index.html"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <img
                style={{ width: "280px", height: "150px", marginTop: "-60px" }}
                src={logo}
                alt=""
              />
              {/* <h1 className="m-0 display-4 text-primary text-uppercase">
                न्याय
              </h1> */}
            </a>
          </div>
          <div className="col-lg-9">
            <div className="row bg-white border-bottom d-none d-lg-flex">
              <div className="col-lg-7 text-left">
                <div className="h-100 d-inline-flex align-items-center py-2 px-3">
                  <FontAwesomeIcon
                    className="icons"
                    icon={faEnvelope}
                    style={{ color: "#b49c73", width: "45px", height: "20px" }}
                  />
                  <a
                    style={{ textDecoration: "none" }}
                    href="mailto:office@mokshalegalgroup.com"
                  >
                    office@mokshalegalgroup.com
                  </a>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                  <FontAwesomeIcon
                    className="icons"
                    icon={faPhone}
                    style={{ color: "#b49c73", width: "45px", height: "20px" }}
                  />
                  <small>+977 9863472265</small>
                </div>
              </div>
              {/* <div className="col-lg-5 text-right">
                <div className="d-inline-flex align-items-center p-2">
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div> */}
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
              <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-primary text-uppercase">
                  न्याय
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <a href="/" className="nav-item nav-link active">
                    Home
                  </a>
                  <a href="/" className="nav-item nav-link">
                    About
                  </a>
                  <a href="/" className="nav-item nav-link">
                    Practice
                  </a>
                  <a href="/" className="nav-item nav-link">
                    Attorneys
                  </a>
                  <div className="nav-item dropdown">
                    {/* <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Dropdown
                    </a> */}
                    <div className="dropdown-menu rounded-0 m-0">
                      <a href="#" className="dropdown-item">
                        Menu Item 1
                      </a>
                      <a href="#" className="dropdown-item">
                        Menu Item 2
                      </a>
                      <a href="#" className="dropdown-item">
                        Menu Item 3
                      </a>
                    </div>
                  </div>
                  <a href="/" className="nav-item nav-link">
                    Services
                  </a>
                </div>
                <a href="" className="btn btn-primary mr-3 d-none d-lg-block">
                  " न्याय "
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 mb-5 pb-5">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item position-relative active"
              style={{ height: "100vh", minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={img1}
                alt="Carousel Slide 1"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Best Law Firm
                  </h4>
                  <h3 className="display-2 text-capitalize text-white mb-4">
                    We fight for your justice
                  </h3>
                  <a
                    className="btn btn-primary py-3 px-5 mt-2"
                    style={{ textDecoration: "none" }}
                    href="mailto:office@mokshalegalgroup.com"
                  >
                    Get An Appointment
                  </a>
                </div>
              </div>
            </div>
            <div
              className="carousel-item position-relative"
              style={{ height: "100vh", minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={img2}
                alt="Carousel Slide 2"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Results You Deserve
                  </h4>
                  <h3 className="display-2 text-capitalize text-white mb-4">
                    We prepared to oppose for you
                  </h3>
                  <a className="btn btn-primary py-3 px-5 mt-2" href="#">
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div className="btn btn-lg btn-secondary btn-lg-square">
              <span className="carousel-control-prev-icon"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div className="btn btn-lg btn-secondary btn-lg-square">
              <span className="carousel-control-next-icon"></span>
            </div>
          </a>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- Services Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            {/* Practice Description Section */}
            <div className="col-lg-3">
              <h6 className="text-uppercase">Our Practice</h6>
              <h1 className="mb-4">Our Practice Areas</h1>
              <p>
                Our Practice Areas include Civil Law for disputes, Family Law
                for domestic matters, Business Law for corporate needs, and
                Criminal Law for strong defense. We offer professional, reliable
                legal solutions tailored to your needs with care and expertise.
              </p>
              <a className="btn btn-primary mt-2">More Services</a>
            </div>

            {/* Practice Areas Carousel */}
            <div className="col-lg-9 pt-5 pt-lg-0">
              <div
                className="bg-primary rounded"
                style={{ height: "200px" }}
              ></div>
              <Slider
                className="slider"
                {...settings}
                style={{
                  marginTop: "-100px",
                  padding: "0 30px",
                }}
              >
                {/* Practice Area 1 */}
                <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                  <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                    <FontAwesomeIcon
                      className="icons"
                      icon={faLandmark}
                      style={{
                        color: "#b49c73",
                        width: "45px",
                        height: "30px",
                      }}
                    />
                  </div>
                  <h5 className="mb-4 px-4">Civil Law</h5>
                  <p className="m-0"></p>
                </div>

                {/* Practice Area 2 */}
                <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                  <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                    <FontAwesomeIcon
                      className="icons"
                      icon={faUsers}
                      style={{
                        color: "#b49c73",
                        width: "45px",
                        height: "30px",
                      }}
                    />
                  </div>
                  <h5 className="mb-4 px-4">Family Law</h5>
                  <p className="m-0"></p>
                </div>

                {/* Practice Area 3 */}
                <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                  <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                    <FontAwesomeIcon
                      className="icons"
                      icon={faHandHoldingUsd}
                      style={{
                        color: "#b49c73",
                        width: "45px",
                        height: "30px",
                      }}
                    />
                  </div>
                  <h5 className="mb-4 px-4">Business Law</h5>
                  <p className="m-0"></p>
                </div>

                {/* Practice Area 4 */}
                <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                  <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                    <FontAwesomeIcon
                      className="icons"
                      icon={faGavel}
                      style={{
                        color: "#b49c73",
                        width: "45px",
                        height: "30px",
                      }}
                    />
                  </div>
                  <h5 className="mb-4 px-4">Criminal Law</h5>
                  <p className="m-0"></p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Services End --> */}

      {/* <!-- Appointment Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="bg-appointment rounded">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-lg-6 py-5">
                <div
                  className="rounded p-5 my-5"
                  style={{ background: "rgba(55, 55, 63, 0.7)" }}
                >
                  <h1 className="text-center text-white mb-4">
                    Get An Appointment
                  </h1>
                  <form>
                    {/* Name Input */}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your Name"
                        required
                        aria-label="Your Name"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your Email"
                        required
                        aria-label="Your Email"
                      />
                    </div>

                    {/* Date and Time Selection */}
                    <div className="form-row">
                      <div className="col-6">
                        <div className="form-group">
                          <div
                            className="date"
                            id="date"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              className="form-control border-0 p-4 datetimepicker-input"
                              placeholder="Select Date"
                              data-target="#date"
                              data-toggle="datetimepicker"
                              aria-label="Select Date"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <div
                            className="time"
                            id="time"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              className="form-control border-0 p-4 datetimepicker-input"
                              placeholder="Select Time"
                              data-target="#time"
                              data-toggle="datetimepicker"
                              aria-label="Select Time"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    {/* <div className="form-group">
                      <select
                        className="custom-select border-0 px-4"
                        style={{ height: "47px" }}
                        aria-label="Select A Service"
                      >
                        <option selected>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div> */}

                    {/* Submit Button */}
                    <div>
                      <button
                        className="btn btn-primary btn-block border-0 py-3"
                        type="submit"
                      >
                        Get An Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Appointment End --> */}

      {/* <!-- Features Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <img
                  className="position-absolute w-100 h-100"
                  src={img4}
                  alt="Feature"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="feature-text bg-white rounded p-lg-5">
                <h6 className="text-uppercase">Our Features</h6>
                <h1 className="mb-4">Why Choose Us</h1>

                {/* Feature 1 */}
                <div className="d-flex mb-4">
                  <div
                    className="btn-primary btn-lg-square px-3"
                    style={{ borderRadius: "50px" }}
                  >
                    <h5 className="text-secondary m-0">01</h5>
                  </div>
                  <div className="ml-4">
                    <h5>Best Law Practices</h5>
                    <p className="m-0"></p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="d-flex mb-4">
                  <div
                    className="btn-primary btn-lg-square px-3"
                    style={{ borderRadius: "50px" }}
                  >
                    <h5 className="text-secondary m-0">02</h5>
                  </div>
                  <div className="ml-4">
                    <h5>Efficiency & Trust</h5>
                    <p className="m-0"></p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="d-flex">
                  <div
                    className="btn-primary btn-lg-square px-3"
                    style={{ borderRadius: "50px" }}
                  >
                    <h5 className="text-secondary m-0">03</h5>
                  </div>
                  <div className="ml-4">
                    <h5>Results You Deserve</h5>
                    <p className="m-0"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features End --> */}

      {/*  Action Start  */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="bg-action rounded" style={{ height: "500px" }}>
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-lg-7 text-center">
                <h1 className="text-white mb-4">
                  Let's get started. Call us now for a Free Consultation
                </h1>
                {/* Show modal on button click */}
                <button
                  className="btn btn-primary py-3 px-5 mt-2"
                  onClick={() => setShowModal(true)}
                >
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <h4>Call Us at:</h4>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                +9779863472265
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {/*  Action End  */}

      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-secondary text-white pt-5 px-sm-3 px-md-5"
        style={{ marginTop: "90px" }}
      >
        <div className="row mt-5">
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: "rgba(256, 256, 256, .05)" }}
            >
              <FontAwesomeIcon
                className="icons"
                icon={faLocationDot}
                style={{ color: "#b49c73", width: "45px", height: "30px" }}
              />
              <div className="ml-3">
                <h5 className="text-white">Our Office</h5>
                <p className="m-0">Anamnagar-29, Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: "rgba(256, 256, 256, .05)" }}
            >
              <FontAwesomeIcon
                className="icons"
                icon={faEnvelopeOpenText}
                style={{ color: "#b49c73", width: "45px", height: "30px" }}
              />
              <div className="ml-3">
                <h5 className="text-white">Email Us</h5>
                <a
                  style={{ textDecoration: "none" }}
                  href="mailto:office@mokshalegalgroup.com"
                >
                  office@mokshalegalgroup.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: "rgba(256, 256, 256, .05)" }}
            >
              <FontAwesomeIcon
                className="icons"
                icon={faPhone}
                style={{ color: "#b49c73", width: "45px", height: "30px" }}
              />
              <div className="ml-3">
                <h5 className="text-white">Call Us</h5>
                <p className="m-0">+977 9863472265</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="index.html" className="navbar-brand">
              <img
                style={{ width: "180px", height: "100px", marginTop: "-20px" }}
                src={logo}
                alt=""
              />
            </a>
            <p>
              "न्यायका लागि हाम्रो अविचल प्रतिबद्धता, सत्य र न्यायलाई सुरक्षित
              राख्न सधैं संघर्षरत, तपाईंको हक अधिकारको रक्षामा हाम्रो योगदान
              निरन्तर जारी छ। सत्यको सधैं विजय होस्, न्यायको आवाज कहिल्यै मौन
              नहोस्!"
            </p>
            {/* <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div> */}
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-semi-bold text-primary mb-4">
              Popular Links
            </h4>
            <div className="d-flex flex-column justify-content-start">
              <p className="text-white mb-2 disabled" href="#">
                <i className="fa fa-angle-right mr-2"></i>Home
              </p>
              <p className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>About
              </p>
              <p className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Services
              </p>
              <p className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Attorney
              </p>
              <p className="text-white" href="#">
                <i className="fa fa-angle-right mr-2"></i>Contact
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-semi-bold text-primary mb-4">
              Quick Links
            </h4>
            <div className="d-flex flex-column justify-content-start">
              <p className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>FAQs
              </p>
              <p className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Help
              </p>
              <p className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Terms
              </p>
              <p className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Privacy
              </p>
              <p className="text-white" href="#">
                <i className="fa fa-angle-right mr-2"></i>Site Map
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-semi-bold text-primary mb-4">
              Newsletter
            </h4>
            <p>Subscribe to our news letter.</p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0"
                  style={{ padding: "25px" }}
                  placeholder="Your Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row p-4 mt-5 mx-0"
          style={{ background: "rgba(256, 256, 256, .05)" }}
        >
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy;{" "}
              <a className="font-weight-bold" href="#">
                Moksha Legal Group
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <p className="m-0 text-white">
              Powered by{" "}
              <a className="font-weight-bold" href="https://htmlcodex.com">
                ANRIKA
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </div>
  );
};

export default Home;

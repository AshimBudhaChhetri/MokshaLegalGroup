import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../Assets/img/Moksha logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownDestination, setDropdownDestination] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const offset = currentScrollPos;

    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`nav-bar  ${scrolled ? "dark-nav" : ""} ${
        visible ? "visible" : "hidden"
      }`}
    >
      <Link to="/" className="navbar-left">
        <img src={logo} alt="Logo" />
      </Link>

      <div className="navbar-right ">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`toggle ${showMenu ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`nav-links ${showMenu ? "active" : ""}`}>
          <li onClick={toggleMenu}>
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/aboutpage">
              ABOUT US
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/services">
              SERVICES
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/attorney">
              ATTORNEY
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/publications">
              PUBLICATIONS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contactpage">
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

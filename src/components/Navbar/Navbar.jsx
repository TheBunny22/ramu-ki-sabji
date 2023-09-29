import React from "react";
import { NavLogo } from "./Navbar.style";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import Footer from "./Footer";
import useScrollTop from "../../hooks/useScrollTop";
const Navbar = () => {
  const { scrollTop } = useScrollTop();

  return (
    <>
      <div className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <NavLogo src={Logo} alt="Logo" />
          <div className="navbar-brand" onClick={scrollTop}>
            <Link to="/">
              Ramu <span>Ki</span> Sabji
            </Link>
          </div>
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
            <div className="navbar-nav ml-auto">
              <NavLink
                to="/"
                className="nav-item nav-link"
                activeclassname="active"
                onClick={scrollTop}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-item nav-link"
                activeclassname="active"
                onClick={scrollTop}
              >
                About
              </NavLink>
              <NavLink
                to="/menu"
                className="nav-item nav-link"
                activeclassname="active"
                onClick={scrollTop}
              >
                Menu
              </NavLink>
              <NavLink
                to="/booking"
                className="nav-item nav-link"
                activeclassname="active"
                onClick={scrollTop}
              >
                Booking
              </NavLink>

              <NavLink
                to="/contact"
                className="nav-item nav-link"
                activeclassname="active"
                onClick={scrollTop}
              >
                Contact
              </NavLink>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                  Account
                </a>
                <div className="dropdown-menu">
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                  <Link to="/register" className="dropdown-item">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;

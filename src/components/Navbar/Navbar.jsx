import React from "react";
import {
  NavCover,
  NavHeading,
  NavItem,
  NavItemCover,
  NavLogo,
} from "./Navbar.style";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/logo1.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <NavLogo src={Logo} alt="Logo" />
          <a href="/" className="navbar-brand">
            Ramu <span>Ki</span> Sabji
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
            <div className="navbar-nav ml-auto">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="feature.html" className="nav-item nav-link">
                Feature
              </a>
              <a href="team.html" className="nav-item nav-link">
                Chef
              </a>
              <a href="menu.html" className="nav-item nav-link">
                Menu
              </a>
              <a href="booking.html" className="nav-item nav-link">
                Booking
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu">
                  <a href="blog.html" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="single.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
    // <>
    //   <NavCover>
    //     <NavHeading>
    //      
    //       <span style={{ color: colors.Orange }}>Ramu</span>
    //       <span style={{ color: colors.Black }}>&nbsp;Ki&nbsp;</span>
    //       <span style={{ color: colors.Green }}>Sabji</span>
    //     </NavHeading>

    //     <NavItemCover>
    //       <NavItem to="/">Home</NavItem>
    //       <NavItem to="/">About</NavItem>
    //       <NavItem to="/">Contact</NavItem>
    //       <NavItem to="/">Menu</NavItem>
    //       <div>
    //         <NavItem to="/">Login </NavItem>/<NavItem to="/"> Signup</NavItem>
    //       </div>
    //     </NavItemCover>
    //   </NavCover>
    // </>
  );
};

export default Navbar;

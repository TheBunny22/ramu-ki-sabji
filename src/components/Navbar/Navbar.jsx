import React from "react";
import {
  NavCover,
  NavHeading,
  NavItem,
  NavItemCover,
  NavLogo,
} from "./Navbar.style";
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
          <a className="navbar-brand" onClick={scrollTop}>
            <Link to="/">
              Ramu <span>Ki</span> Sabji
            </Link>
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
              <NavLink
                to="/"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={scrollTop}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={scrollTop}
              >
                About
              </NavLink>
              <NavLink
                to="/menu"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={scrollTop}
              >
                Menu
              </NavLink>
              <NavLink
                to="/booking"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={scrollTop}
              >
                Booking
              </NavLink>

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
      <Footer />
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

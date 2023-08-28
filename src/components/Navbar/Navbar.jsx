import React from "react";
import {
  NavCover,
  NavHeading,
  NavItem,
  NavItemCover,
  NavLogo,
} from "./Navbar.style";
import { colors } from "../../theme/theme";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Logo/logo_variations/logo_without_text_and_tagline.png";
const Navbar = () => {
  return (
    <>
      <NavCover>
        <NavHeading>
          <NavLogo src={Logo} alt="Logo" />
          <span style={{ color: colors.Orange }}>Ramu</span>
          <span style={{ color: colors.Black }}>&nbsp;Ki&nbsp;</span>
          <span style={{ color: colors.Green }}>Sabji</span>
        </NavHeading>

        <NavItemCover>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/">About</NavItem>
          <NavItem to="/">Contact</NavItem>
          <NavItem to="/">Menu</NavItem>
          <div>
            <NavItem to="/">Login </NavItem>/<NavItem to="/"> Signup</NavItem>
          </div>
        </NavItemCover>
      </NavCover>
      <Outlet />
    </>
  );
};

export default Navbar;

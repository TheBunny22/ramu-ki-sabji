import { styled } from "styled-components";
import { colors } from "../../theme/theme";
import { Link } from "react-router-dom";

const NavCover = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.White};
  height: 4rem;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0px 0px 5px 0px rgba(37, 37, 37, 1);
`;

const NavHeading = styled.h1`
  color: ${colors.Orange};
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
`;
const NavItemCover = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;
const NavItem = styled(Link)`
  text-decoration: none;
  color: ${colors.Black};
  font-weight: 700;
  &:hover {
    color: ${colors.Orange};
  }
`;
const NavLogo = styled.img`
  height: 3rem;
  object-fit: contain;
  
`;
export { NavCover, NavHeading, NavItemCover, NavItem, NavLogo };

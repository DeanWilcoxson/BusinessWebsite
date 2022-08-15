import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaCaretDown } from "react-icons/fa";
export const NavContainer = styled.div`
  margin-right: 5rem;
  z-index: 1000;
`;
export const NavBox = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const NavDropDown = styled.div`
  /* display: none; */
  padding: 0.5rem 1rem;
  float: left;
  z-index: 1000;
  overflow: hidden;
`;
export const NavDropDownContainer = styled.div`
  display: none;
  position: absolute;
  min-width: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NavRouterButton = styled(RouterLink)`
  padding: 0.5rem 1rem;
  font-size: medium;
  /* font-family: Arial; */
  color: #43b1f8;
  text-decoration: none;
  z-index: 1000;
  letter-spacing: 0.2em;
  text-shadow: 1px 1px 2px black;
  &:hover {
    color: #20fc8f;
    background-color: #88888855;
  }
`;
export const NavScrollButton = styled(ScrollLink)`
  display: block;
  float: none;
  color: white;
  z-index: 1000;
`;
export const NavDropDownCaret = styled(FaCaretDown)`
  color: #43b1f8;
  &:hover {
    color: #20fc8f;
  }
`;

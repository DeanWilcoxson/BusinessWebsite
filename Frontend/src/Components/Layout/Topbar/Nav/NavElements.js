import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
  z-index: 1000;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: left;
`;
export const NavDropDownContainer = styled.ul`
  margin-top: .5rem;
  position: absolute;
  z-index: 1000;
  background: linear-gradient(45deg, #000, #888);
`;
export const NavScrollContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const NavRouterButton = styled(RouterLink)`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: medium;
  color: #43b1f8;
  text-decoration: none;
  z-index: 1000;
  letter-spacing: 0.2em;
  text-shadow: 1px 1px 2px black;
  &.active {
    transition: 0.5s ease;
    border-bottom: 1px solid #20fc8f;
    color: #20fc8f;
  }
  &:hover {
    transition: 0.5s ease;
    color: #20fc8f;
    background-color: #88888855;
  }
`;
export const NavScrollButton = styled(ScrollLink)`
  padding: 1rem;
  width: 100%;
  color: white;
  z-index: 1000;
  color: #43b1f8;
  &:hover {
    color: #20fc8f;
    background-color: #88888855;
    transition: all 0.5s ease;
  }
`;

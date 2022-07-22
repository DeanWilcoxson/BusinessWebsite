import React from "react";
import { NavContainer, NavBox, NavButton } from "./NavElements";
const Nav = () => {
  return (
    <NavContainer>
      <NavBox>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/services">Services</NavButton>
        <NavButton to="/about">About</NavButton>
      </NavBox>
    </NavContainer>
  );
};
export default Nav;

import React from "react";
import { NavContainer, NavBox, NavButton } from "./NavElements";
const Nav = () => {
  return (
    <NavContainer>
      <NavBox>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/">Services</NavButton>
        <NavButton to="/">About</NavButton>
      </NavBox>
    </NavContainer>
  );
};
export default Nav;

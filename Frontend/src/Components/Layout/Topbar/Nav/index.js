import React from "react";
import { NavContainer, NavBox, NavButton } from "./NavElements";
const Nav = () => {
  return (
    <NavContainer>
      <NavBox>
        <NavButton>Home</NavButton>
        <NavButton>Services</NavButton>
        <NavButton>About</NavButton>
      </NavBox>
    </NavContainer>
  );
};
export default Nav;

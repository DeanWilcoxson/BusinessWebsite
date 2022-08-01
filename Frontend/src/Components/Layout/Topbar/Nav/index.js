import React from "react";
import { NavContainer, NavBox, NavButton } from "./NavElements";
const Nav = () => {
  return (
    <NavContainer>
      <NavBox>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/packages">Packages</NavButton>
        <NavButton to="/templates">Templates</NavButton>
        <NavButton to="/about">About</NavButton>
      </NavBox>
    </NavContainer>
  );
};
export default Nav;

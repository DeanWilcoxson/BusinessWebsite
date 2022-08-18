import React from "react";
import {
  NavContainer,
  NavBox,
  NavRouterButton,
  NavDropDown,
  NavScrollButton,
  NavDropDownCaret,
  NavDropDownContainer,
} from "./NavElements";


const Nav = () => {
  return (
    <NavContainer>
      <NavBox>
        <NavDropDown>
          <NavRouterButton to="/">
            Home<NavDropDownCaret></NavDropDownCaret>
          </NavRouterButton>
          <NavDropDownContainer>
            <NavScrollButton to="landing" spy={true} smooth={true}>
              Top
            </NavScrollButton>
            <NavScrollButton to="landing" spy={true} smooth={true}>
              Mid
            </NavScrollButton>
            <NavScrollButton to="landing" spy={true} smooth={true}>
              End
            </NavScrollButton>
          </NavDropDownContainer>
        </NavDropDown>
        <NavRouterButton to="/packages">Packages</NavRouterButton>
        <NavRouterButton to="/templates">Templates</NavRouterButton>
        <NavRouterButton to="/about">About</NavRouterButton>
      </NavBox>
    </NavContainer>
  );
};
export default Nav;

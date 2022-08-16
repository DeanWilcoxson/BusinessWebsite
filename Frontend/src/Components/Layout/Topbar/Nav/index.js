import React, { useState } from "react";
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
  const [homeToggle, setHomeToggle] = useState(false);

  function handleToggle() {
    setHomeToggle(!homeToggle);
  }

  return (
    <NavContainer>
      <NavBox>
        <NavDropDown>
          <NavRouterButton to="/" onClick={handleToggle}>
            Home<NavDropDownCaret></NavDropDownCaret>
          </NavRouterButton>
          {homeToggle ? (
            <NavDropDownContainer>
              <NavScrollButton
                to="overview"
                spy={true}
                smooth={true}
                onClick={handleToggle}
              >
                Overview
              </NavScrollButton>
              <NavScrollButton
                to="technology"
                spy={true}
                smooth={true}
                onClick={handleToggle}
              >
                Technology
              </NavScrollButton>
              <NavScrollButton
                to="hosting"
                spy={true}
                smooth={true}
                onClick={handleToggle}
              >
                Hosting
              </NavScrollButton>
            </NavDropDownContainer>
          ) : (
            ""
          )}
        </NavDropDown>
        <NavRouterButton to="/packages">Packages</NavRouterButton>
        <NavRouterButton to="/templates">Templates</NavRouterButton>
        <NavRouterButton to="/about">About</NavRouterButton>
      </NavBox>
    </NavContainer>
  );
};
export default Nav;

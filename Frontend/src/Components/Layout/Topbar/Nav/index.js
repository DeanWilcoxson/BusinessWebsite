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
  const [packagesToggle, setPackagesToggle] = useState(false);

  function handleHomeToggle() {
    setHomeToggle(!homeToggle);
  }
  function handlePackagesToggle() {
    setPackagesToggle(!packagesToggle);
  }
  function handleHomeToggle() {
    setHomeToggle(!homeToggle);
  }

  return (
    <NavContainer>
      <NavBox>
        <NavDropDown>
          <NavRouterButton to="/" onClick={handleHomeToggle}>
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
        <NavDropDown>
          <NavRouterButton to="/packages">Packages</NavRouterButton>
          {packagesToggle ? (
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
        <NavRouterButton to="/templates">Templates</NavRouterButton>
        <NavRouterButton to="/about">About</NavRouterButton>
      </NavBox>
    </NavContainer>
  );
};
export default Nav;

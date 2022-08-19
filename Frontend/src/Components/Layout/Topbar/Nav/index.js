import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  function handleHomeToggle() {
    console.log(location);
    if (location.pathname == "/") {
      setHomeToggle(!homeToggle);
      console.log(location.pathname);
    }
  }
  function handlePackagesToggle() {
    if (location.pathname == "/packages") {
      setPackagesToggle(!packagesToggle);
      console.log(location.pathname);
    }
  }
  function handleTemplatesToggle() {
    setTemplatesToggle(!homeToggle);
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
                onClick={handleHomeToggle}
              >
                Overview
              </NavScrollButton>
              <NavScrollButton
                to="technology"
                spy={true}
                smooth={true}
                onClick={handleHomeToggle}
              >
                Technology
              </NavScrollButton>
              <NavScrollButton
                to="hosting"
                spy={true}
                smooth={true}
                onClick={handleHomeToggle}
              >
                Hosting
              </NavScrollButton>
            </NavDropDownContainer>
          ) : (
            ""
          )}
        </NavDropDown>
        <NavDropDown>
          <NavRouterButton to="/packages" onClick={handlePackagesToggle}>
            Packages<NavDropDownCaret></NavDropDownCaret>
          </NavRouterButton>
          {packagesToggle ? (
            <NavDropDownContainer>
              <NavScrollButton
                to="packages"
                spy={true}
                smooth={true}
                onClick={handlePackagesToggle}
              >
                Packages
              </NavScrollButton>
              <NavScrollButton
                to="Services"
                spy={true}
                smooth={true}
                onClick={handlePackagesToggle}
              >
                Services
              </NavScrollButton>
              <NavScrollButton
                to="hosting"
                spy={true}
                smooth={true}
                onClick={handlePackagesToggle}
              >
                Processes
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

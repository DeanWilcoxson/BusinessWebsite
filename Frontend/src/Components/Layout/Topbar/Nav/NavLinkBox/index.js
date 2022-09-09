import React, { useState } from "react";
import {
  NavRouterButton,
  NavDropDown,
  NavScrollButton,
  NavDropDownContainer,
} from "../NavElements";
const NavLinkBox = ({
  endpoint,
  text,
  subNav,
}) => {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(() => !toggle);
  }
  return (
    <NavDropDown>
      <NavRouterButton
        to={endpoint}
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
        activestyle="true"
      >
        {text}
        {toggle && (
          <NavDropDownContainer>
            {subNav.map((subItem) => {
              return (
                <NavScrollButton
                  key={subNav.indexOf(subItem)}
                  spy={true}
                  smooth={true}
                  to={subItem.endpoint}
                  // onClick={}
                >
                  {subItem.text}
                </NavScrollButton>
              );
            })}
          </NavDropDownContainer>
        )}
      </NavRouterButton>
    </NavDropDown>
  );
};

export default NavLinkBox;

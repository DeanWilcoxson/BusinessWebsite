import React, { useState } from "react";
import { FaThList } from "react-icons/fa";
// import { useLocation, useHistory } from "react-router-dom";
// import * as Scroll from "react-scroll";
import {
  NavRouterButton,
  NavDropDown,
  NavScrollButton,
  NavDropDownContainer,
  NavScrollContainer,
} from "../NavElements";
const NavLinkBox = ({ endpoint, text, subNav }) => {
  // const path = useLocation().pathname;
  // const location = path.split("/")[1];
  // const history = useHistory();
  // const scroller = Scroll.scroller;
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
                <NavScrollContainer>
                  <NavScrollButton
                    spy={true}
                    smooth={true}
                    key={subNav.indexOf(subItem)}
                    to={subItem.endpoint}
                    onClick={handleToggle}
                  >
                    {subItem.text}
                  </NavScrollButton>
                </NavScrollContainer>
              );
            })}
          </NavDropDownContainer>
        )}
      </NavRouterButton>
    </NavDropDown>
  );
};

export default NavLinkBox;

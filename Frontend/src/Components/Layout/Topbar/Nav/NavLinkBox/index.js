import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  NavRouterButton,
  NavDropDown,
  NavScrollButton,
  NavDropDownContainer,
  // NavScrollContainer,
} from "../NavElements";
const NavLinkBox = ({ endpoint, text, subNav }) => {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(() => !toggle);
  }

  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const history = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScrollToSection = async (endpoint, scroll) => {
    console.log(endpoint, scroll);
    await history(endpoint);
    await scroller.scrollTo(scroll, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  };

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
                  onClick={() => {
                    goToPageAndScrollToSection(
                      endpoint,
                      subNav.subitem.endpoint
                    );
                  }}
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
// <NavScrollContainer> </NavScrollContainer>;

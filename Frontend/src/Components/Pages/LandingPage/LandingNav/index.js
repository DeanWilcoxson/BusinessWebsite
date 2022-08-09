import React, { useState, useEffect } from "react";
import {
  LandingNavContainer,
  LandingNavBox,
  LandingNavLink,
} from "./LandingNavElements";
const LandingNav = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    window.scrollY >= 10 ? setScrollNav(true) : setScrollNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <LandingNavContainer scrollNav={scrollNav}>
      <LandingNavBox>
        <LandingNavLink to="landing" spy={true} smooth={true}>
          Top
        </LandingNavLink>
        <LandingNavLink to="extended_landing" spy={true} smooth={true}>
          Mid
        </LandingNavLink>
        <LandingNavLink to="extended_landing_two" spy={true} smooth={true}>
          End
        </LandingNavLink>
      </LandingNavBox>
    </LandingNavContainer>
    
  );
};

export default LandingNav;

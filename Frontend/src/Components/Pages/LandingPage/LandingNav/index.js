import React from "react";
import {
  LandingNavContainer,
  LandingNavBox,
  LandingNavLink,
} from "./LandingNavElements";
const LandingNav = () => {
  return (
    <LandingNavContainer>
      <LandingNavBox>
        <LandingNavLink to="landing" spy={true} smooth={true}></LandingNavLink>
        <LandingNavLink
          to="extended_landing"
          spy={true}
          smooth={true}
        ></LandingNavLink>
        <LandingNavLink
          to="extended_landing_two"
          spy={true}
          smooth={true}
        ></LandingNavLink>
      </LandingNavBox>
    </LandingNavContainer>
  );
};

export default LandingNav;

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

import React from "react";
import Topbar from "./../../../Layout/Topbar/index";
import { LandingContainer, LandingBox } from "./LandingPageElements";
const Landing = () => {
  return (
    <LandingContainer>
      <LandingBox>
        <Topbar />
      </LandingBox>
    </LandingContainer>
  );
};
export default Landing;

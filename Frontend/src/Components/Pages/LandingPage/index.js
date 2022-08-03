import React from "react";
import { LandingContainer, LandingBox } from "./LandingPageElements";
import BodySection from "../../Layout/Body";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../../Layout/Body/SectionData.js";

const Landing = () => {
  return (
    <LandingContainer>
      <LandingBox>
        <BodySection {...homeObjOne} />
      </LandingBox>
    </LandingContainer>
  );
};
export default Landing;

// <BodySection {...homeObjTwo} />
// <BodySection {...homeObjThree} />

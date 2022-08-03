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
        <BodySection {...homeObjTwo} />
        <BodySection {...homeObjThree} />
      </LandingBox>
    </LandingContainer>
  );
};
export default Landing;

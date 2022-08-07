import React from "react";
import { LandingContainer, LandingBox } from "./LandingPageElements";
import BodySection from "../LandingPage/LandingSection";
import LandingNav from "./LandingNav";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../LandingPage/LandingSection/SectionData.js";

const Landing = () => {
  return (
    <LandingContainer>
      <LandingBox>
        <LandingNav />
        <BodySection {...homeObjOne} />
        <BodySection {...homeObjTwo} />
        <BodySection {...homeObjThree} />
      </LandingBox>
    </LandingContainer>
  );
};
export default Landing;

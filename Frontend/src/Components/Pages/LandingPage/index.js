import React from "react";
import { LandingContainer, LandingBox } from "./LandingPageElements";
import BodySection from "../LandingPage/LandingSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../LandingPage/LandingSection/SectionData.js";

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

// We utilize the wildly popular, and powerful library React to design your User Interface. This type of power can only
// be coupled with the powerhouse Node.js for the backend, the reliability of Express.js,
// and then followed up with the consistency and speed of a non-relational database, such as MongoDB.

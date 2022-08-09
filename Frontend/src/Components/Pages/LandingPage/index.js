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

// We utilize the wildly popular, and powerful library React to design your User Interface. This type of power can only 
// be coupled with the powerhouse Node.js for the backend, the reliability of Express.js, 
// and then followed up with the consistency and speed of a non-relational database, such as MongoDB.
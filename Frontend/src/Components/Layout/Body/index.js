import React from "react";
import { BodyContainer, BodyBox, BodyButton, BodyDesc } from "./BodyElements";
import { HomeSections } from "./SectionData";
const BodySection = () => {
  const sectionOneData = HomeSections[0];
  console.log(sectionOneData);
  return (
    <BodyContainer>
      <BodyBox>
        <BodyDesc></BodyDesc>
        <BodyButton></BodyButton>
      </BodyBox>
    </BodyContainer>
  );
};
export default BodySection;

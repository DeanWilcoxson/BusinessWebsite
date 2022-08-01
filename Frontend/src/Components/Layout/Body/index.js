import React from "react";
import {
  BodyContainer,
  BodyBox,
  ButtonBox,
  BodyButton,
  BodyHeading,
  BodyDesc,
  ArrowLogo,
  ArrowButton,
} from "./BodyElements";
import { HomeSections } from "./SectionData";
import { VideoBg, VideoContainer } from "./../../../Videos/VideoElements";
import video from "./../../../Videos/video.mp4";
const BodySection = () => {
  const heading = HomeSections[0].sectionOne.Heading;
  const description = HomeSections[0].sectionOne.Description;
  const button_one = HomeSections[0].sectionOne.ButtonTextOne;
  const button_two = HomeSections[0].sectionOne.ButtonTextTwo;
  return (
    <BodyContainer>
      <VideoContainer>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </VideoContainer>
      <BodyBox>
        <BodyHeading>{heading}</BodyHeading>
        <BodyDesc>{description}</BodyDesc>
        <ButtonBox>
          <BodyButton to="/about">{button_one}</BodyButton>
          <BodyButton to="/contact">{button_two}</BodyButton>
        </ButtonBox>
        <ArrowButton>
          <ArrowLogo></ArrowLogo>
        </ArrowButton>
      </BodyBox>
    </BodyContainer>
  );
};
export default BodySection;

import React from "react";
import {
  BodyContainer,
  BodyBox,
  ButtonBox,
  BodyButton,
  BodyHeading,
  BodyContentContainer,
  BodyDesc,
  BodyImage,
} from "./BodyElements";
import {
  VideoBg,
  VideoContainer,
} from "../../../../Assets/Videos/VideoElements";
import video from "../../../../Assets/Videos/video.mp4";
const BodySection = ({
  id,
  heading,
  description,
  img,
  button_text_one,
  button_text_two,
  lightText,
  darkBg,
  darkText,
}) => {
  // console.log(id);
  return (
    <BodyContainer
      id={id}
      darkBg={darkBg}
      lightText={lightText}
      darkText={darkText}
    >
      <VideoContainer>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </VideoContainer>
      <BodyBox>
        <BodyContentContainer>
          <BodyHeading lightText={lightText}>{heading}</BodyHeading>
          <BodyDesc lightText={lightText}>{description}</BodyDesc>
          <ButtonBox>
            <BodyButton to="/packages">{button_text_one}</BodyButton>
            <BodyButton to="/contact">{button_text_two}</BodyButton>
          </ButtonBox>
        </BodyContentContainer>
        <BodyImage src={img}></BodyImage>
      </BodyBox>
    </BodyContainer>
  );
};
export default BodySection;

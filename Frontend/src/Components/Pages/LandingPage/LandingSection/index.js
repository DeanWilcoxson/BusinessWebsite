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
  buttons,
  lightText,
  darkBg,
}) => {
  return (
    <BodyContainer id={id} darkbg="false" lighttext="true">
      <VideoContainer>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </VideoContainer>
      <BodyBox>
        <BodyContentContainer>
          <BodyHeading lightText={lightText}>{heading}</BodyHeading>
          <BodyDesc lightText={lightText}>{description}</BodyDesc>
          <ButtonBox>
            {buttons.map((button) => {
              return (
                <BodyButton to={button.url} key={buttons.indexOf(button)}>
                  {button.button_text}
                </BodyButton>
              );
            })}
          </ButtonBox>
        </BodyContentContainer>
        <BodyImage src={img}></BodyImage>
      </BodyBox>
    </BodyContainer>
  );
};
export default BodySection;

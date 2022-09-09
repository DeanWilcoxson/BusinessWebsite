import React from "react";
import {
  MissionContainer,
  MissionBox,
  MissionHeader,
  MissionParagraph,
} from "./MissionStatementElements";
const Mission = ({ id, header, paragraph, lightText }) => {
  return (
    <MissionContainer id={id}>
      <MissionHeader lightText={lightText}>{header}</MissionHeader>
      <MissionBox>
        <MissionParagraph lightText={lightText}>{paragraph}</MissionParagraph>
      </MissionBox>
    </MissionContainer>
  );
};
export default Mission;

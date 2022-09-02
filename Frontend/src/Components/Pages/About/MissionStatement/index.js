import React from "react";
import {
  MissionContainer,
  MissionBox,
  MissionHeader,
  MissionParagraph,
} from "./MissionStatementElements";
const Mission = ({ header, paragraph }) => {
  return (
    <MissionContainer>
      <MissionHeader>{}</MissionHeader>
      <MissionBox>
        <MissionParagraph>{paragraph}</MissionParagraph>
      </MissionBox>
    </MissionContainer>
  );
};
export default Mission;

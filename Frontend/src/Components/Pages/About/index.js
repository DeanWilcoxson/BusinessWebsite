import React from "react";
import { AboutContainer, AboutHeader } from "./AboutElements";
import Mission from "./MissionStatement";
import { MissionData } from "./MissionStatement/MissionData";
const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>About</AboutHeader>
      <Mission {...MissionData} />
    </AboutContainer>
  );
};
export default About;

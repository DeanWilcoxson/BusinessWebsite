import React from "react";
import { AboutBox, AboutContainer, AboutHeader } from "./AboutElements";
import ContactSection from "./Contact";
import Mission from "./MissionStatement";
import { MissionData } from "./MissionStatement/MissionData";
const About = ({ title, lightText }) => {
  return (
    <AboutContainer>
      <AboutBox>
        <AboutHeader lightText={lightText}>{title}</AboutHeader>
      </AboutBox>
      <ContactSection />
      <Mission {...MissionData} />
    </AboutContainer>
  );
};
export default About;

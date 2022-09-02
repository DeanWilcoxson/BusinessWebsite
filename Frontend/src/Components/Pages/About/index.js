import React from "react";
import { AboutBox, AboutContainer, AboutHeader } from "./AboutElements";
import ContactSection from "./Contact";
import Mission from "./MissionStatement";
import { MissionData } from "./MissionStatement/MissionData";
const About = ({ titles, lightText }) => {
  return (
    <AboutContainer>
      <AboutBox>
        <AboutHeader lightText={lightText}>{titles[0]}</AboutHeader>
        <ContactSection />
      </AboutBox>
      <AboutBox>
        <AboutHeader lightText={lightText}>{titles[1]}</AboutHeader>
        <Mission {...MissionData} />
      </AboutBox>
      <AboutBox>
        <AboutHeader lightText={lightText}>{titles[2]}</AboutHeader>
      </AboutBox>
    </AboutContainer>
  );
};
export default About;

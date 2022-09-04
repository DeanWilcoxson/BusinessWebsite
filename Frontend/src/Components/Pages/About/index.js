import React from "react";
import { AboutBox, AboutContainer } from "./AboutElements";
import ContactSection from "./Contact";
import Mission from "./MissionStatement";
import { MissionData } from "./MissionStatement/MissionData";
import { ContactData } from "./Contact/ContactData";
const About = () => {
  return (
    <AboutContainer>
      <AboutBox>
        <ContactSection {...ContactData} />
        <Mission {...MissionData} />
      </AboutBox>
    </AboutContainer>
  );
};
export default About;

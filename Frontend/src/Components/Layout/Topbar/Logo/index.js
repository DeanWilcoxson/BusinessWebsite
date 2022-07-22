import React from "react";
import { LogoContainer, LogoImg, BusinessName } from "./LogoElements";
import BusinessLogo from "../../../../Images/BusinessLogo.png";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={BusinessLogo}></LogoImg>
      <BusinessName>DB Web Development LLC</BusinessName>
    </LogoContainer>
  );
};
export default Logo;

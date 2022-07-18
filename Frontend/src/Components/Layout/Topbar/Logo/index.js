import React from "react";
import { LogoContainer, LogoImg, BusinessName } from "./LogoElements";
import BusinessLogo from "../../../../images/BusinessLogo.png";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={BusinessLogo}></LogoImg>
      <BusinessName>DB Web Development LLC</BusinessName>
    </LogoContainer>
  );
};
export default Logo;

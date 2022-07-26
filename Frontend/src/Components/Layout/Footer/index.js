import React from "react";
import {
  FooterContainer,
  FooterBox,
  FooterInfoBox,
  FooterInfoList,
  FooterInfoItem,
  FooterLink,
  FooterCopyright,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterInfoBox>
          <FooterInfoList>
            <FooterInfoItem></FooterInfoItem>
            <FooterInfoItem></FooterInfoItem>
            <FooterInfoItem></FooterInfoItem>
          </FooterInfoList>
        </FooterInfoBox>
        <FooterLink></FooterLink>
        <FooterLink></FooterLink>
        <FooterLink></FooterLink>
      </FooterBox>
      <FooterCopyright>&copy; DB Web Development LLC</FooterCopyright>
    </FooterContainer>
  );
};
export default Footer;

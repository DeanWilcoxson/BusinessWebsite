import React from "react";
import {
  FooterContainer,
  FooterBox,
  FooterInfoBox,
  FooterInfoList,
  FooterInfoItem,
  FooterLink,
  FooterCopyright,
  FooterInfoListTitle,
  TwitterIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterInfoBox>
          <FooterInfoListTitle>Connect</FooterInfoListTitle>
          <FooterInfoList>
            <FooterInfoItem href="">
              <TwitterIcon></TwitterIcon>
            </FooterInfoItem>
            <FooterInfoItem href="">
              <FacebookIcon></FacebookIcon>
            </FooterInfoItem>
            <FooterInfoItem href="">
              <GithubIcon></GithubIcon>
            </FooterInfoItem>
            <FooterInfoItem href="">
              <InstagramIcon></InstagramIcon>
            </FooterInfoItem>
            <FooterInfoItem href="">
              <LinkedInIcon></LinkedInIcon>
            </FooterInfoItem>
            <FooterInfoItem href=""></FooterInfoItem>
            <FooterInfoItem href=""></FooterInfoItem>
          </FooterInfoList>
        </FooterInfoBox>
        <FooterLink>Contact Us</FooterLink>
        <FooterLink></FooterLink>
        <FooterLink>Our Process</FooterLink>
      </FooterBox>
      <FooterCopyright>&copy; DB Web Development LLC</FooterCopyright>
    </FooterContainer>
  );
};
export default Footer;

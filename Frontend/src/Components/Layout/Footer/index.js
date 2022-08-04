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
  PhoneIcon,
  MessageIcon,
  EmailIcon,
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
        <FooterInfoBox>
          <FooterInfoListTitle>Contact Us</FooterInfoListTitle>
          <FooterInfoList>
            <FooterInfoItem href="">
              <PhoneIcon></PhoneIcon>
            </FooterInfoItem>
            <FooterInfoItem href="">
              <MessageIcon></MessageIcon>
            </FooterInfoItem>
            <FooterInfoItem href="">
              <EmailIcon></EmailIcon>
            </FooterInfoItem>
          </FooterInfoList>
        </FooterInfoBox>
        <FooterLink>Our Process</FooterLink>
      </FooterBox>
      <FooterCopyright>&copy; DB Web Development LLC</FooterCopyright>
    </FooterContainer>
  );
};
export default Footer;

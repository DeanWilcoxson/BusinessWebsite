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
  GooglePlusIcon,
  PhoneIcon,
  MessageIcon,
  EmailIcon,
  DatabaseIcon,
  WebpageIcon,
  MobileIcon,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
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
            <FooterInfoItem href="">
              <GooglePlusIcon></GooglePlusIcon>
            </FooterInfoItem>
            <FooterInfoItem href=""></FooterInfoItem>
          </FooterInfoList>
        </FooterInfoBox>
        <FooterInfoBox>
          <FooterInfoListTitle>Our Process</FooterInfoListTitle>
          <FooterInfoList>
            <FooterInfoItem>
              <WebpageIcon></WebpageIcon>
            </FooterInfoItem>
            <FooterInfoItem>
              <MobileIcon></MobileIcon>
            </FooterInfoItem>
            <FooterInfoItem>
              <DatabaseIcon></DatabaseIcon>
            </FooterInfoItem>
          </FooterInfoList>
        </FooterInfoBox>
      </FooterBox>
      <FooterCopyright>&copy; DB Web Development LLC</FooterCopyright>
    </FooterContainer>
  );
};
export default Footer;

import React from "react";
import {
  FooterContainer,
  FooterBox,
  FooterInfoBox,
  FooterInfoList,
  FooterInfoItem,
  // FooterLink,
  FooterCopyright,
  FooterInfoListTitle,
  FooterLogoImg,
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  PhoneIcon,
  MessageIcon,
  EmailIcon,
  // GithubIcon,
  // InstagramIcon,
  // DatabaseIcon,
  // WebpageIcon,
  // MobileIcon,
} from "./FooterElements";
import BusinessLogo from "../../../Assets/Images/BusinessLogo.png";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterInfoBox>
          <FooterInfoListTitle>Connect With Us</FooterInfoListTitle>
          <FooterInfoList>
            <FooterInfoItem href="https://twitter.com/home">
              <TwitterIcon></TwitterIcon>
            </FooterInfoItem>
            <FooterInfoItem href="https://www.facebook.com/">
              <FacebookIcon></FacebookIcon>
            </FooterInfoItem>
            <FooterInfoItem href="https://www.linkedin.com/">
              <LinkedInIcon></LinkedInIcon>
            </FooterInfoItem>
          </FooterInfoList>
        </FooterInfoBox>
        <FooterLogoImg src={BusinessLogo} alt="BusinessLogo"></FooterLogoImg>
        <FooterInfoBox>
          <FooterInfoListTitle>Contact Us</FooterInfoListTitle>
          <FooterInfoList>
            <FooterInfoItem href="tel://+12098400950">
              <PhoneIcon></PhoneIcon>
            </FooterInfoItem>
            <FooterInfoItem href="sms://+12098400950">
              <MessageIcon></MessageIcon>
            </FooterInfoItem>
            <FooterInfoItem href="mailto:dmwhswsmw919216@gmail.com">
              <EmailIcon></EmailIcon>
            </FooterInfoItem>
          </FooterInfoList>
        </FooterInfoBox>
      </FooterBox>
      <FooterCopyright>
        &copy; DB Web Development LLC. All Rights Reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};
export default Footer;

// <FooterInfoBox>
//   <FooterInfoListTitle>Our Process</FooterInfoListTitle>
//   <FooterInfoList>
//     <FooterInfoItem>
//       <WebpageIcon></WebpageIcon>
//     </FooterInfoItem>
//     <FooterInfoItem>
//       <MobileIcon></MobileIcon>
//     </FooterInfoItem>
//     <FooterInfoItem>
//       <DatabaseIcon></DatabaseIcon>
//     </FooterInfoItem>
//   </FooterInfoList>
// </FooterInfoBox>
// <FooterInfoItem href="https://github.com/">
//   <GithubIcon></GithubIcon>
// </FooterInfoItem>
// <FooterInfoItem href="https://www.instagram.com/?hl=en">
//   <InstagramIcon></InstagramIcon>
// </FooterInfoItem>

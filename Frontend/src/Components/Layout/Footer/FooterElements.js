import styled from "styled-components";
import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaDatabase,
  FaMobile,
} from "react-icons/fa";
import { MdMessage, MdMail, MdWeb } from "react-icons/md";
export const FooterContainer = styled.div`
  bottom: 0;
  padding: 1rem;
  padding-bottom: 0px;
  position: fixed;
  width: 100%;
  background-color: #070600;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  width: 80%;
`;
export const FooterLogoImg = styled.img`
  width: 9%;
`;
export const FooterInfoBox = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: justify;
  align-items: center;
  text-align: left;
`;
export const FooterInfoList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  z-index: 999;
  justify-content: space-between;
  align-items: center;
`;
export const FooterInfoListTitle = styled.p`
  color: #888;
`;
export const FooterInfoItem = styled.a`
  z-index: 999;
  padding: 0.5rem;
`;
export const FooterLink = styled.a`
  z-index: 999;
  color: #888;
  padding: 0.5rem;
  &:hover {
    color: #20fc8f;
  }
`;
export const FooterCopyright = styled.p`
  z-index: 999;
  text-align: center;
  color: #888;
`;
export const TwitterIcon = styled(FaTwitter)`
  color: #888;
  font-size: 25px;

  &:hover {
    color: #20fc8f;
  }
`;
export const FacebookIcon = styled(FaFacebook)`
  color: #888;
  font-size: 25px;

  &:hover {
    color: #20fc8f;
  }
`;
export const GithubIcon = styled(FaGithub)`
  color: #888;
  font-size: 25px;

  &:hover {
    color: #20fc8f;
  }
`;
export const InstagramIcon = styled(FaInstagram)`
  color: #888;
  font-size: 25px;

  &:hover {
    color: #20fc8f;
  }
`;
export const LinkedInIcon = styled(FaLinkedin)`
  color: #888;
  font-size: 25px;

  &:hover {
    color: #20fc8f;
  }
`;
export const PhoneIcon = styled(FaPhoneSquareAlt)`
  color: #888;
  font-size: 25px;

  &:hover {
    color: #20fc8f;
  }
`;
export const MessageIcon = styled(MdMessage)`
  color: #888;
  font-size: 25px;

  &:hover {
    color: #20fc8f;
  }
`;
export const EmailIcon = styled(MdMail)`
  color: #888;
  font-size: 25px;

  &:hover {
    color: #20fc8f;
  }
`;
export const DatabaseIcon = styled(FaDatabase)`
  color: #888;
  font-size: 25px;

  &:hover {
    color: #20fc8f;
  }
`;
export const WebpageIcon = styled(MdWeb)`
  color: #888;
  font-size: 30px;
  &:hover {
    color: #20fc8f;
  }
`;
export const MobileIcon = styled(FaMobile)`
  color: #888;
  font-size: 25px;

  &:hover {
    color: #20fc8f;
  }
`;

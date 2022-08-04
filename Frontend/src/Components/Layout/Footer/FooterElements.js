import styled from "styled-components";
import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { MdMessage, MdMail } from "react-icons/md";
export const FooterContainer = styled.div`
  bottom: 0px;
  position: relative;
  width: 100%;
  background-color: #070600;
  padding: 2rem;
  z-index: 1000;
`;
export const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const FooterInfoBox = styled.div`
  z-index: 1000;
`;
export const FooterInfoList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
`;
export const FooterInfoListTitle = styled.p`
  color: #888;
`;
export const FooterInfoItem = styled.a`
  z-index: 1000;
  padding: 1rem;
`;
export const FooterLink = styled.a`
  z-index: 1000;
  color: #888;
  padding: 1rem;
  &:hover {
    color: #20fc8f;
  }
`;
export const FooterCopyright = styled.p`
  z-index: 1000;
  text-align: center;
  color: #888;
`;
export const TwitterIcon = styled(FaTwitter)`
  color: #888;
  &:hover {
    color: #20fc8f;
  }
`;
export const FacebookIcon = styled(FaFacebook)`
  color: #888;
  &:hover {
    color: #20fc8f;
  }
`;
export const GithubIcon = styled(FaGithub)`
  color: #888;
  &:hover {
    color: #20fc8f;
  }
`;
export const InstagramIcon = styled(FaInstagram)`
  color: #888;
  &:hover {
    color: #20fc8f;
  }
`;
export const LinkedInIcon = styled(FaLinkedin)`
  color: #888;
  &:hover {
    color: #20fc8f;
  }
`;
export const PhoneIcon = styled(FaPhoneSquareAlt)`
  color: #888;
  &:hover {
    color: #20fc8f;
  }
`;
export const MessageIcon = styled(MdMessage)`
  color: #888;
  &:hover {
    color: #20fc8f;
  }
`;
export const EmailIcon = styled(MdMail)`
  color: #888;
  &:hover {
    color: #20fc8f;
  }
`;

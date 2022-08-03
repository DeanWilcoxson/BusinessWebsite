import styled from "styled-components";
import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
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
`;
export const FooterCopyright = styled.p`
  z-index: 1000;
  text-align: center;
  color: #888;
`;
export const TwitterIcon = styled(FaTwitter)`
  color: #888;
`;
export const FacebookIcon = styled(FaFacebook)`
  color: #888;
`;
export const GithubIcon = styled(FaGithub)`
  color: #888;
`;
export const InstagramIcon = styled(FaInstagram)`
  color: #888;
`;
export const LinkedInIcon = styled(FaLinkedin)`
  color: #888;
`;

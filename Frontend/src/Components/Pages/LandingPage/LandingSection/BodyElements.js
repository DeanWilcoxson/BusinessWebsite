import styled from "styled-components";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link as LinkA } from "react-router-dom";
import { Link as LinkB } from "react-scroll";
export const BodyContainer = styled.div`
  padding: 8rem;
  /* padding-top: 0px; */
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: ${({ darkBg }) => (darkBg ? "#888" : " transparent")};
`;
export const BodyBox = styled.div`
  padding: 5rem;
  padding-bottom: 0px;
  /* margin-top: 5rem; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
export const BodyContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: justify;
  width: 60%;
`;
export const BodyHeading = styled.h1`
  font-family: "Times New Roman", Times, serif;
  margin: 2rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff" : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
  z-index: 100;
`;
export const BodyDesc = styled.p`
  letter-spacing: 0.1em;
  z-index: 100;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) =>
    lightText ? "0.75px 0.75px 1.5px #000" : "none"};
  padding: 2rem;
  font-size: 1.25rem;
  width: 80%;
  text-align: left;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem;
  z-index: 100;
`;
export const BodyButton = styled(LinkA)`
  z-index: 100;
  margin: 1rem;
  padding: 0.5rem 1.5rem;
  border: none;
  background: transparent;
  font-size: medium;
  cursor: hand;
  text-decoration: none;
  background-color: #43b1f8;
  color: #f7f7ff;
  &:hover {
    color: #000;
    background-color: #20fc8f;
  }
`;
export const BodyImage = styled.img`
  width: 40%;
  z-index: 100;
`;
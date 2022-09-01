import styled from "styled-components";
import { Link } from "react-router-dom";
export const BodyContainer = styled.div`
  padding: 4rem 3rem;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: ${({ darkBg }) =>
    darkBg
      ? "linear-gradient(180deg, rgba(67,177,248,1) 0%, rgba(57,151,212,1) 30%, rgba(36,96,135,1) 70%, rgba(0,0,0,1) 100%);"
      : "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(19,50,69,1) 15%, rgba(43,114,159,1) 32%, rgba(53,139,195,1) 41%, rgba(67,177,248,1) 50%, rgba(50,131,184,1) 68%, rgba(28,74,104,1) 85%, rgba(0,0,0,1) 100%);"};
`;
export const BodyBox = styled.div`
  padding: 3.5rem;
  /* margin-top: 3rem; */
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
  width: 60%;
  text-align: center;
  /* border-bottom: 1px inset #f7f7ff; */
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
  margin-left: 1rem;
  z-index: 100;
`;
export const BodyButton = styled(Link)`
  z-index: 100;
  margin: 1rem;
  padding: 0.5rem 1.5rem;
  border: none;
  background: transparent;
  font-size: medium;
  cursor: hand;
  text-decoration: none;
  background-color: #20fc8f;
  color: #000;
  &:hover {
    color: #f7f7ff;
    background-color: #da344d;
    transition: all .5s ease;
  }
`;
export const BodyImage = styled.img`
  width: 40%;
  z-index: 100;
`;

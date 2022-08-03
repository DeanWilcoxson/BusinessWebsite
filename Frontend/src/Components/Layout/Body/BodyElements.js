import styled from "styled-components";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link as LinkA } from "react-router-dom";
import { Link as LinkB } from "react-scroll";
export const BodyContainer = styled.div`
  padding: 8rem;
  z-index: 100;
`;
export const BodyBox = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
export const BodyHeading = styled.h1`
  font-family: "Times New Roman", Times, serif;
  margin: 2rem;
  color: #ffffffd6;
  text-shadow: 1px 1px 2px black;
  z-index: 100;
`;
export const BodyContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const BodyDesc = styled.p`
  /* font-family: Arial; */
  letter-spacing: 0.1em;
  z-index: 100;
  color: #ffffffd6;
  text-shadow: 1px 1px 2px black;
  padding: 2rem;
  font-size: 1rem;
  width: 40%;
  text-align: left;
`;
export const BodyImage = styled.img`
  width: 25%;
  z-index: 100;
  border-radius: 15%;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  z-index: 100;
`;
export const BodyButton = styled(LinkA)`
  z-index: 100;
  color: #43b1f8;
  margin: 1rem;
  border: none;
  background: transparent;
  font-size: large;
  cursor: hand;
  text-decoration: none;
`;
export const ArrowButton = styled(LinkB)`
  z-index: 100;
  border: none;
  background: transparent;
`;
export const ArrowLogo = styled(FaArrowCircleDown)`
  z-index: 100;
  color: grey;
  padding: 1rem;
  font-size: 3rem;
`;

import styled from "styled-components";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link as LinkA } from "react-router-dom";
import { Link as LinkB } from "react-scroll";
export const BodyContainer = styled.div`
  padding: 5rem;
  z-index: 1000;
`;
export const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const BodyHeading = styled.h1`
  color: #ffffffd6;
  text-shadow: 1px 1px 2px black;
  z-index: 1000;
`;
export const BodyDesc = styled.p`
  z-index: 1000;
  color: #ffffffd6;
  text-shadow: 1px 1px 2px black;
  padding: 2rem;
  font-size: 1rem;
  width: 40%;
  text-align: center;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  z-index: 1000;
`;
export const BodyButton = styled(LinkA)`
  z-index: 1000;
  color: #43b1f8;
  margin: 1rem;
  border: none;
  background: transparent;
  font-size: x-large;
  cursor: hand;
  text-decoration: none;
`;
export const ArrowButton = styled(LinkB)`
  z-index: 1000;
  border: none;
  background: transparent;
`;
export const ArrowLogo = styled(FaArrowCircleDown)`
  z-index: 1000;
  color: grey;
  padding: 1rem;
  font-size: 3rem;
`;

import styled from "styled-components";
import { FaArrowCircleDown } from "react-icons/fa";
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
  color: #43b1f8;
  text-shadow: 1px 1px 2px black;

  z-index: 1000;
`;
export const BodyDesc = styled.p`
  z-index: 1000;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  margin: 4rem;
  z-index: 1000;
`;
export const BodyButton = styled.button`
  z-index: 1000;
`;
export const ArrowButton = styled.button`
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

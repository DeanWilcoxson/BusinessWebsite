import styled from "styled-components";
import { Link } from "react-scroll";
export const LandingNavContainer = styled.div`
  z-index: 1000;
  background: ${({ scrollNav }) =>
    scrollNav
      ? "linear-gradient(45deg, #070600 0%,#888 50%, #888 100%)"
      : "transparent"};
  width: 3%;
  height: 100%;
  position: fixed;
  top: 4.2rem;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const LandingNavBox = styled.nav`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  right: 0px;
  width: 100%;
`;
export const LandingNavLink = styled(Link)`
  color: #888;
  text-shadow: 0.5px 0.5px 1px black;
  z-index: 1000;
  padding: 0.5rem 1rem;
  font-size: medium;
  color: #43b1f8;
  &:hover {
    color: #20fc8f;
    background-color: #88888855;
  }
`;

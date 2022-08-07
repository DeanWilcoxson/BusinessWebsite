import styled from "styled-components";
import { Link } from "react-scroll";
export const LandingNavContainer = styled.div`
  z-index: 1000;
  background-color: transparent;
  width: 30%;
  position: fixed;
  top: 3rem;
  right: 0px;
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const LandingNavBox = styled.nav`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0px;
  width: 25%;
`;
export const LandingNavLink = styled(Link)`
  color: #888;
  text-shadow: 0.5px 0.5px 1px black;
  z-index: 1000;
  &:hover {
    background-color: #88888855;
  }
`;

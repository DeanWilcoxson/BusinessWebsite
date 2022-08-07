import styled from "styled-components";
import { Link } from "react-scroll";
export const LandingNavContainer = styled.div`
  z-index: 2000;
  background-color: grey;
  width: 100%;
  top: 5rem;
  position: relative;
`;
export const LandingNavBox = styled.nav`
  margin: 5rem;
`;
export const LandingNavLink = styled(Link)`
  color: red;
  text-align: center;
`;

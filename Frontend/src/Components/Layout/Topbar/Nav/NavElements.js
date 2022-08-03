import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavContainer = styled.div`
  margin-right: 5rem;
  z-index: 1000;
`;
export const NavBox = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const NavButton = styled(Link)`
  padding: 1rem;
  font-size: 1rem;
  /* font-family: Arial; */
  color: #43b1f8;
  text-shadow: 1px 1px 2px black;
  text-decoration: none;
  z-index: 1000;
  letter-spacing: 0.2em;
`;

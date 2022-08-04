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
  padding: 0.5rem 1rem;
  font-size: medium;
  /* font-family: Arial; */
  color: #43b1f8;
  text-decoration: none;
  z-index: 1000;
  letter-spacing: 0.2em;
  text-shadow: 1px 1px 2px black;
  &:hover {
    color: #20fc8f;
    background-color: #88888855;
  }
`;

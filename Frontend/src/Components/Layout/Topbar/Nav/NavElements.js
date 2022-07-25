import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavContainer = styled.div`
  display: flex;
`;
export const NavBox = styled.div``;
export const NavButton = styled(Link)`
  padding: 1rem;
  font-size: 1.75rem;
  color: #43b1f8;
  text-shadow: 0.5px 0.5px 1px black;
`;

import styled from "styled-components";
export const TopbarContainer = styled.div`
  position: fixed;
  /* margin-top: -10px; */
  top: 0px;
  left: 0px;
  right: 0px;
  margin: 0;
  padding: 0;
  /* transition: background-color 0.8s all ease; */
  background: ${({ scrollNav }) =>
    scrollNav
      ? "linear-gradient(to right, #070600 0%, #070600 40%, #888 100%)"
      : "transparent"};
  z-index: 1000;
  width: 100%;
`;
export const TopbarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  margin-top: 0.5rem;
`;

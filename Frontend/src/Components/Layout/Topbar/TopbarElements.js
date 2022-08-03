import styled from "styled-components";
export const TopbarContainer = styled.div`
  position: fixed;
  margin-top: -10px;
  margin: 0;
  padding: 0;
  background: ${({ scrollNav }) =>
    scrollNav
      ? "linear-gradient(to right, black 0%, black 40%, #888 100%)"
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
`;
// export const TopbarHr = styled.hr`
//   width: 100%;
//   height: 2px;
//   border: none;
//   background: ${({ scrollNav }) => (scrollNav ? "transparent" : "#43b1f8")};
//   color: ${({ scrollNav }) => (scrollNav ? "transparent" : "#43b1f8")};
// `;

import styled from "styled-components";
export const MissionContainer = styled.div`
  margin: 0;
  padding: 3rem;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(19, 50, 69, 1) 15%,
    rgba(43, 114, 159, 1) 32%,
    rgba(53, 139, 195, 1) 41%,
    rgba(67, 177, 248, 1) 50%,
    rgba(50, 131, 184, 1) 68%,
    rgba(28, 74, 104, 1) 85%,
    rgba(0, 0, 0, 1) 100%
  );
`;
export const MissionBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const MissionHeader = styled.h1`
  font-family: "Times New Roman", Times, serif;
  display: block;
  text-align: center;
  z-index: 100;
  padding-top: 3rem;
  margin: 1.15rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const MissionParagraph = styled.p`
  padding: 3rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
  width: 60%;
  letter-spacing: 0.125em;
  line-height: 2rem;
  font-size: larger;
  font-weight: 400;
  text-indent: 5rem;
  text-align: justify;
`;

import styled from "styled-components";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
export const TemplatePageContainer = styled.div`
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
export const TemplatePageBox = styled.div`
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TemplatePageHeader = styled.h1`
  font-family: "Times New Roman", Times, serif;
  display: block;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  z-index: 100;
  padding: 1.15rem;
  margin: 1.15rem;
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const TemplateContainer = styled.div``;
export const TemplateBox = styled.div``;
export const Template = styled.div``;
export const TemplateHeader = styled.h3``;
export const TemplateNav = styled.nav``;
export const TemplateBody = styled.div``;
export const TemplateLeftArrow = styled(BsFillArrowLeftSquareFill)``;
export const TemplateRightArrow = styled(BsFillArrowRightSquareFill)``;

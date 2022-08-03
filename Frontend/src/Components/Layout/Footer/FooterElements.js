import styled from "styled-components";
export const FooterContainer = styled.div`
  bottom: 0px;
  position: fixed;
  width: 100%;
`;
export const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoBox = styled.div``;
export const FooterInfoList = styled.ul`
  list-style-type: none;
`;
export const FooterInfoItem = styled.li``;
export const FooterLink = styled.a``;
export const FooterCopyright = styled.p`
  text-align: center;
  /* color: ${({ scrollNav }) => (scrollNav ? "#000" : "#43b1f8")}; */
`;

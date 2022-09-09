import styled from "styled-components";

export const SinglePageContainer = styled.div`
  margin: 0;
  padding: 2rem;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  /* height: 100vh; */
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
export const SinglePageBox = styled.div`
  margin: 0;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SinglePageHeader = styled.h1`
  font-family: "Times New Roman", Times, serif;
  display: block;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  z-index: 100;
  padding: 1.15rem;
  margin: 1.15rem;
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const SinglePageBodyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const SinglePageDescription = styled.p`
  text-align: center;
  padding: 2rem;
  width: 30%;
  font-size: large;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const SinglePageImg = styled.img`
  width: 35%;
`;
export const SinglePagePackageItemsList = styled.ul`
  padding: 3rem;
`;
export const SinglePagePackageItem = styled.div``;
export const SinglePagePackageItemTitle = styled.h5``;
export const SinglePagePackageItemDesc = styled.p``;
export const SinglePageListsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const SinglePageListTitle = styled.h3``;
export const SinglePageProsList = styled.ul``;
export const SinglePageConsList = styled.ul``;
export const SinglePageListItem = styled.li``;

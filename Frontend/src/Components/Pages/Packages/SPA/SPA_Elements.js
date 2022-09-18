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
  border: 3px outset #888;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(
    180deg,
    rgba(189, 189, 189, 0.5049370089832808) 0%,
    rgba(65, 190, 248, 0.49933476808692223) 100%
  );
`;
export const SinglePageDescription = styled.p`
  text-align: justify;
  padding: 2rem;
  width: 45%;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  font-size: x-large;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const SinglePageImg = styled.img`
  width: 45%;
`;
export const SinglePagePackageItemsList = styled.ul`
  padding: 3rem;
  margin-bottom: 3rem;
  border: 3px outset #888;
  border-radius: 20px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(189, 189, 189, 0.5049370089832808) 0%,
    rgba(65, 190, 248, 0.49933476808692223) 100%
  );
`;
export const SinglePagePackageItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  padding: 1rem;
`;
export const SinglePagePackageItemTitle = styled.h3`
  text-align: left;
  text-decoration: underline;
  font-size: larger;
  padding-top: 0.65rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const SinglePagePackageItemDesc = styled.p`
  width: 75%;
  text-align: left;
  font-size: larger;
  letter-spacing: 0.1em;
  line-height: 2em;
  /* padding: 0.5rem 1rem; */
  padding-left: 10rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const SinglePageListsBox = styled.div`
  margin: 3rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  border: 3px outset #888;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(189, 189, 189, 0.5049370089832808) 0%,
    rgba(65, 190, 248, 0.49933476808692223) 100%
  );
`;
export const SinglePageListTitle = styled.h3`
  font-size: x-large;
  text-align: center;
  padding: 1rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const SinglePageProsList = styled.ul`
  /* li::before {
    padding: 0.75rem;
    color: green;
    content: "+";
  } */
`;
export const SinglePageConsList = styled.ul`
  /* li::before {
    padding: 0.75rem;
    color: red;
    content: "-";
  } */
`;
export const SinglePageListItem = styled.li`
  font-style: italic;
  font-size: larger;
  line-height: 2em;
  padding: 0.2rem;
  list-style-type: none;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;

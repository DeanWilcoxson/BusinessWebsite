import styled from "styled-components";
export const ContactsContainer = styled.div`
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
export const ContactsBox = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContactHeader = styled.h1`
  font-family: "Times New Roman", Times, serif;
  display: block;
  text-align: center;
  z-index: 100;
  padding-top: 3rem;
  margin: 1.15rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const Contact = styled.div`
  z-index: 100;
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 0.25fr);

  /* display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center; */

  border: 3px #888 outset;
  border-radius: 20px;
  width: 50%;
  min-height: 40vh;
  background: linear-gradient(
    180deg,
    rgba(189, 189, 189, 0.5049370089832808) 0%,
    rgba(65, 190, 248, 0.49933476808692223) 100%
  );
`;
export const ContactName = styled.h3`
  grid-column: 1/4;
  text-align: center;
  letter-spacing: 0.1em;
  font-style: italic;
  padding: 0.5rem;
  text-decoration: underline;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ContactNumber = styled.p`
  grid-column: 1/2;
  grid-row: 3/4;
  padding: 0.5rem;
  text-align: center;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ContactQualifications = styled.p`
  grid-column: 1/4;
  grid-row: 2/3;
  text-align: center;
  padding: 0.5rem;
  font-weight: bold;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ContactImg = styled.img`
  justify-self: center;
  align-self: center;
  width: 60%;
  grid-column: 2/4;
  grid-row: 4/6;
  border-radius: 20px;
  border: 2px outset grey;
`;
export const ContactLanguagesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1/2;
  grid-row: 4/6;
  width: 100%;
`;
export const ContactLanguagesTitle = styled.p`
  padding-top: 0.5rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ContactLanguagesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: justify;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  padding: 0.5rem;
`;
export const ContactLanguageItem = styled.li`
  list-style-type: none;
  padding: 0.25rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ContactAddressBox = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
`;
export const ContactCity = styled.p`
  padding: 0.25rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ContactState = styled.p`
  padding: 0.25rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ContactZipCode = styled.p`
  padding: 0.25rem;
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;
export const ContactYrsExp = styled.p`
  grid-column: 3/4;
  grid-row: 3/4;
  padding: 0.5rem;
  /* font-weight: bold; */
  color: ${({ lightText }) => (lightText ? "#f7f7ff " : " #000000")};
  text-shadow: ${({ lightText }) => (lightText ? "1px 1px 2px #000" : "none")};
`;

import styled from "styled-components";
export const ContactsContainer = styled.div``;
export const ContactsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  border: 3px #888 outset;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(189, 189, 189, 0.5049370089832808) 0%,
    rgba(65, 190, 248, 0.49933476808692223) 100%
  );
`;
export const ContactName = styled.h3``;
export const ContactImg = styled.img``;
export const ContactLanguagesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
`;
export const ContactLanguageItem = styled.li`
  list-style-type: none;
  padding: 0.25rem;
`;
export const ContactQualifications = styled.p``;
export const ContactCity = styled.p``;
export const ContactState = styled.p``;
export const ContactZipCode = styled.p``;
export const ContactYrsExp = styled.p``;

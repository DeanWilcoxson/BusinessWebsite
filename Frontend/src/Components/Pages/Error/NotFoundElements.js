import styled from "styled-components";
export const ErrorContainer = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  padding: 5rem;
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
export const ErrorBox = styled.div`
  padding: 5rem;
  margin: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 10%,
    rgba(136, 136, 136, 1) 71%,
    rgba(86, 86, 86, 1) 100%
  );
`;
export const ErrorText = styled.h1`
  color: #43b1f8;
  text-shadow: 1px 1px 1px black;
`;

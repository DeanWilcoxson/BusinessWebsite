import styled from "styled-components";
export const AuthContainer = styled.div`
  margin: 40px;
  font-family: sans-serif;
  background: linear-gradient(to right, #000000, black, #888888, grey);
`;
export const AuthFormLabel = styled.h3`
  color: #43b1f8;
`;
export const AuthBox = styled.div`
  padding: 20px;
`;
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
export const AuthInput = styled.input`
  padding: 5px;
  border-radius: 5px;
`;
export const AuthInputLabel = styled.label`
  margin: 0.5rem;
  padding: 0.5rem;
  color: #43b1f8;
`;
export const AuthButton = styled.button`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: #43b1f8;
    color: white;
  }
`;

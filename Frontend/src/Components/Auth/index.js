import React from "react";
import {
  AuthForm,
  AuthBox,
  AuthContainer,
  AuthButton,
  AuthInput,
} from "./AuthElements";
const Auth = () => {
  return (
    <AuthContainer>
      <AuthBox>
        <AuthForm>
          <AuthInput></AuthInput>
          <AuthInput></AuthInput>
          <AuthButton></AuthButton>
        </AuthForm>
      </AuthBox>
    </AuthContainer>
  );
};
export default Auth;

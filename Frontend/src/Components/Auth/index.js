import React from "react";
import {
  AuthForm,
  AuthBox,
  AuthContainer,
  AuthButton,
  AuthInput,
} from "./AuthElements";

function Auth () {
  return (
    <AuthContainer>
    AUTH
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

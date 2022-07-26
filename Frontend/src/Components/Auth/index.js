import React from "react";
import {
  AuthForm,
  AuthBox,
  AuthContainer,
  AuthButton,
  AuthInput,
  AuthInputLabel,
  AuthFormLabel,
} from "./AuthElements";
import axios from "axios";

function Auth() {
  const initInputs = {
    username: "",
    password: "",
  };
  const [inputs, setInputs] = React.useState(initInputs);

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {}

  return (
    <AuthContainer>
      <AuthBox>
        <AuthForm>
          <AuthFormLabel>Owner Login</AuthFormLabel>
          <AuthInputLabel>
            Username:
            <AuthInput
              type="username"
              name="username"
              onChange={handleChange}
            ></AuthInput>
          </AuthInputLabel>

          <AuthInputLabel>
            Password:
            <AuthInput
              type="password"
              name="password"
              onChange={handleChange}
            ></AuthInput>
          </AuthInputLabel>

          <AuthButton>Submit</AuthButton>
        </AuthForm>
      </AuthBox>
    </AuthContainer>
  );
}
export default Auth;

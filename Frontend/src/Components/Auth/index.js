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
    isAdmin: true,
    isCustomer: false
  };
  const [inputs, setInputs] = React.useState(initInputs)


  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]:value
    }))
  }

  function handleSubmit (e) {
    e.preventDefault(e)
    axios.post('/auth/signup', inputs)
      .then(res=>console.log(res))
      .catch(err => console.log(err))
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
              value={inputs.username}
            ></AuthInput>
          </AuthInputLabel>

          <AuthInputLabel>
            Password:
            <AuthInput
              type="password"
              name="password"
              onChange={handleChange}
              value={inputs.password}
            ></AuthInput>
          </AuthInputLabel>

          <AuthButton onCLick={handleSubmit}>Submit</AuthButton>
        </AuthForm>
      </AuthBox>
    </AuthContainer>
  );
}
export default Auth;

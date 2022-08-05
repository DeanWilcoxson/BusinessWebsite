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
const Auth = () => {
  const initInputs = {
    username: "",
    password: "",
  };
  const [inputs, setInputs] = React.useState(initInputs);
  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleTokenAndStorage(token, user) {
    localStorage.setItem("dbweb_token", token);
    const userData = JSON.stringify(user);
    localStorage.setItem("dbweb_user", userData);
    //To gain access to userData on frontend as an object, JSON.parse()
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/auth/login", inputs)
      .then((res) => {
        console.log(res);
        handleTokenAndStorage(res.data.token, res.data.user);
      })
      .catch((err) => console.log(err));
  }
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
              value={inputs.username}
              onChange={handleChange}
            ></AuthInput>
          </AuthInputLabel>

          <AuthInputLabel>
            Password:
            <AuthInput
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            ></AuthInput>
          </AuthInputLabel>

          <AuthButton onClick={handleSubmit}>Submit</AuthButton>
        </AuthForm>
      </AuthBox>
    </AuthContainer>
  );
};
export default Auth;

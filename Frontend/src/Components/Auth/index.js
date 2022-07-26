import React from "react";
import {
  AuthForm,
  AuthBox,
  AuthContainer,
  AuthButton,
  AuthInput,
} from "./AuthElements";
import axios from 'axios'

function Auth () {
  const initInputs = {
    username: "",
    password: ""
  }
  const [inputs, setInputs] = React.useState(initInputs)

  function handleChange (e) {
    e.preventDefault()
    const {name, value} = e.target
    setInputs( prev => ({
      ...prev,
      [name]:value
    }))
  }

  function handleSubmit (e) {
    
  }


  return (
    <AuthContainer>
      <AuthBox>
        <AuthForm>
        <label style={{margin: "9px"}}>
          Username: <AuthInput name='username' onChange={handleChange}></AuthInput>
        </label>
        
        <label style={{margin: "9px"}}>
          Password: <AuthInput type='password' name='password' onChange={handleChange}></AuthInput>
        </label>
          
          <AuthButton>Submit</AuthButton>
        </AuthForm>
      </AuthBox>
    </AuthContainer>
  );
};
export default Auth;

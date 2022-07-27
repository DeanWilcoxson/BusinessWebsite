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
    password: "",
    isAdmin: true,
    isCustomer: false
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
    e.preventDefault(e)
    axios.post('/auth/signup', inputs)
      .then(res=>console.log(res))
      .catch(err => console.log(err))
  }


  return (
    <AuthContainer>
      <AuthBox>
        <AuthForm>
        <label style={{margin: "9px"}}>
          Username: <AuthInput name='username' value={inputs.username} onChange={handleChange}></AuthInput>
        </label>
        
        <label style={{margin: "9px"}}>
          Password: <AuthInput type='password' value={inputs.password} name='password' onChange={handleChange}></AuthInput>
        </label>
          
          <AuthButton onClick={handleSubmit}>Submit</AuthButton>
        </AuthForm>
      </AuthBox>
    </AuthContainer>
  );
};
export default Auth;

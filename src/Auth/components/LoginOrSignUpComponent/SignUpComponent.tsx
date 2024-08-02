import React, { useState, useEffect } from 'react';
import {Container, FormWrapper, Title, Input, Button, InputDiv, BackButtonArrow} from './StyledComponents'
import { userAuthStore } from '../../stores/userAuthStore';
import { useNavigate } from 'react-router-dom';
import { responseStrings } from '../../../Common/constants';
import { BsArrowLeftSquareFill } from "react-icons/bs";



const SignUpComponent = () => {

  const [userData, setUserData] = useState({
    userName : "",
    email : "",
    password : "",
    mobileNumber : userAuthStore.mobileNumber
  });
  const navigate = useNavigate();
  

  const buttonDisabled = !!userData.userName && !!userData.mobileNumber && (userData.password.length > 5) && !!userData.email

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
        ...userData,
        [e.target.name] : e.target.value
    })
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(userData)
  };

  const goBackToLogin = () => {
    navigate("/login")
  }

  useEffect(()=>{
    if (!userAuthStore.mobileNumber || userAuthStore.mobileNumber === ""){
        navigate("/login");
    };
  })

  return (
    <Container>
      <BackButtonArrow onClick={goBackToLogin}>Already Have Account Login</BackButtonArrow>
      <FormWrapper onSubmit={handleSubmit} >
        <Title>Sign up</Title>
        <InputDiv>
            <Input
              type="text"
              placeholder="Name"
              value={userData.userName}
              name="userName"
              onChange={handleChange}
            />
            <Input
              type="email"
              placeholder="email"
              value={userData.email}
              name="email"
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="mobileNumber"
              value={userData.mobileNumber}
              name="mobileNumber"
              disabled
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="New Password"
              value={userData.password}
              onChange={handleChange}
              name="password"
            />
            <Button
              type="submit"
              disabled={!buttonDisabled}
            >
            Enter
            </Button>
        </InputDiv>
      </FormWrapper>
    </Container>
  );
};

export default SignUpComponent;

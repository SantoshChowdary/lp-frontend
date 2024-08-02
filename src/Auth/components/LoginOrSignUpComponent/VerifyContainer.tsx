import React, { useState, useEffect } from 'react';
import {Container, FormWrapper, Title, Input, Button, WrongPassword} from './StyledComponents'
import { userAuthStore } from '../../stores/userAuthStore';
import { useNavigate } from 'react-router-dom';
import { responseStrings } from '../../../Common/constants';

const VerifyPasswordComponent = () => {
  const [password, setPassword] = useState('');
  const [isPasswordWrong, setPasswordWrongStatus] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordWrongStatus(false)
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const verifyStatus = await userAuthStore.checkUserPassword(password);
    if (verifyStatus === responseStrings.LOGIN_SUCCESS){
       navigate("/");
    } else if (verifyStatus === responseStrings.INVALID_PASSWORD){
      setPasswordWrongStatus(true)
    }
  };

  useEffect(()=>{
    if (!userAuthStore.mobileNumber){
        navigate("/login")
    }
  }, [])

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit} >
        <Title>Login / Sign up</Title>
        <div>
            <Input
              type="text"
              placeholder="Password"
              // inputMode='numeric'
              // pattern='[0-9]*'
              value={password}
              onChange={handleChange}
            />
            {isPasswordWrong && <WrongPassword>*Incorrect Password</WrongPassword>}
            <Button
              type="submit"
              disabled={!(password.length >= 4)}
            >
            Verify
            </Button>
        </div>
      </FormWrapper>
    </Container>
  );
};

export default VerifyPasswordComponent;

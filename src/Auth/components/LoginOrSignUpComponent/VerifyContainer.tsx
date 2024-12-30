import React, { useState, useEffect } from 'react';
import {Container, FormWrapper, Title, Input, Button, WrongPassword} from './StyledComponents'
import { userAuthStore } from '../../stores/userAuthStore';
import { useNavigate } from 'react-router-dom';
import { responseStrings } from '../../../Common/constants';
import Loader from '../../../Common/components/Loader';


const VerifyPasswordComponent = () => {
  const [password, setPassword] = useState('');
  const [isPasswordWrong, setPasswordWrongStatus] = useState<boolean>(false);
  const [isLoaderEnabled, setLoadingStatus] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordWrongStatus(false)
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    setLoadingStatus(true);
    e.preventDefault();
    const verifyStatus = await userAuthStore.checkUserPassword(password);
    if (verifyStatus === responseStrings.LOGIN_SUCCESS){
       navigate("/");
    } else if (verifyStatus === responseStrings.INVALID_PASSWORD){
      setPasswordWrongStatus(true)
    };
    setLoadingStatus(false);
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
            {!isLoaderEnabled && <span>Verify</span>}
            {isLoaderEnabled && <Loader />}
            </Button>
        </div>
      </FormWrapper>
    </Container>
  );
};

export default VerifyPasswordComponent;

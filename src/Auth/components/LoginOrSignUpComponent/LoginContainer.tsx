import React, { useState, useCallback } from 'react';
import {Container, FormWrapper, Title, Input, Button} from './StyledComponents'
import { userAuthStore } from '../../stores/userAuthStore';
import { useNavigate } from 'react-router-dom';
import { responseStrings } from '../../../Common/constants';
import Loader from '../../../Common/components/Loader';

const LoginOrSignUpComponent = () => {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [isLoaderEnabled, setLoadingStatus] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        userAuthStore.setMobileNumber(e.target.value)
        setMobileNumber(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    setLoadingStatus(true);
    e.preventDefault();

    let digits = "0123456789";
    for (let i of mobileNumber){
      if (!digits.includes(i)){
        window.confirm("Please enter correct number")
        break;
      }
    };

    const result = await userAuthStore.checkUserExistenceInDb(mobileNumber);

    if (result === responseStrings.LOGIN_SUCCESS){
        navigate("/verify")
    } else if (result === responseStrings.INVALID_USER) {
       navigate("/signup")
    };

    setLoadingStatus(false);
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit} >
        <Title>Login / Sign up</Title>
        <div>
            <Input
              type="text"
              placeholder="Mobile Number"
              // inputMode='numeric'
              // pattern='[0-9]*'
              value={mobileNumber}
              onChange={handleChange}
            />
            <Button
              type="submit"
              disabled={!(mobileNumber.length === 10)}
            >
              {!isLoaderEnabled && <span>Enter</span>}
              {isLoaderEnabled && <Loader />}
            </Button>
        </div>
      </FormWrapper>
    </Container>
  );
};

export default LoginOrSignUpComponent;

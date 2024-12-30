import styled, {keyframes} from 'styled-components';


// key frames
const formFadeIn = keyframes`
  0% {
    opacity: 0;
  } 50% {
    margin-left: 30px;
    opacity: 50%;
  } 100% {
    margin-left: 0;
  }
`

// LoginContainer
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BackButtonArrow = styled.button`
  position: absolute;
  bottom: 5%;
  right: -13%;
  z-index: 2;
  outline: none;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  color: #6969e6;
  display: flex;
  overflow: none;
`

export const FormWrapper = styled.form`
  background: #fff;
  padding: 70px 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 5px #eaeef2;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${formFadeIn} 1s ease-in-out ;
`;

export const Title = styled.p`
  font-family: "Inter";
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 1px;
  color: rgb(23, 31, 70);
  margin-bottom: 50px;
  align-self: center;

  @media screen and (max-width: 567px){
    font-size: 25px;
  }
`;

export const InputDiv = styled.div`
  /* width : 100%; */
`

export const Input = styled.input`
  padding: 10px 12px;
  margin-bottom: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 40px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:focus {
    color: #494a4b;
    background-color: #fff;
    border-color: #80bdff;
    outline: none;
    box-shadow: 0 0 0 .2rem rgba(41, 133, 231, 0.25);
    }  
`;

export const WrongPassword = styled.p`
  color: red;
  font-size: 15px;
  font-weight: 600;
  font-style: italic;
  position: absolute;
  bottom : 10%;
  left: 12%;

`

export const Button = styled.button`
  width: 85%;
  height: 40px;
  padding: 12px;
  background-color: #51a1f7;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #e0dede;
    cursor: not-allowed;
  }
`;

// index.tsx

export const LaptopContainer = styled.div`
    width: 50vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const LaptopMainDiv = styled.div`
    display: flex;
`

export const LaptopInputDiv = styled.div`
    width: 100%;
    max-width: 600px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    :first-child{
        width: 85%;
    }

    * > input{
      width : 85%;
    }
    
`

// Mobile view

export const MobileMainDiv = styled.div`
  width : 100vw;
  height: 100vh;
  
`

export const MobileContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MobileInputDiv = styled(LaptopInputDiv)`
  display: flex;
`



import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import AppLogo from '../../Common/components/Logo';
import { Link } from 'react-router-dom';
import MainTimerComponent from './TimerMain';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <StyledLink to="/">
        <AppLogo />
      </StyledLink>
      <HamburgerIcon onClick={toggleMenu}>
        <FaBars />
      </HamburgerIcon>
      <RightContainer isOpen={isOpen}>
        <MainTimerComponent />
        <NavLinks>
          <StyledLink to="/">

            <NavLink>Home</NavLink>
          </StyledLink>
          <StyledLink to="/code-playground">
            <NavLink>Code Playground</NavLink>
          </StyledLink>
        </NavLinks>
        <UserName>Santosh</UserName>
      </RightContainer>
    </HeaderContainer>
  );
};

// Styled Components

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 5px 3px rgba(217, 216, 216, 0.5);
  color: #3a3a3a;
  position: relative;

  & > * {
    font-family: "Inter";
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const RightContainer = styled.div<{isOpen: boolean}>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  min-width: 60%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #dee3ed;
    padding: 30px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const NavLink = styled.p`
  color: #37393c;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
`;

const UserName = styled.div`
  font-size: 1rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default Header;
export { default as HeaderTimer } from './HeaderTimer';

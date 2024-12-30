import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCheck, BsXOctagon, BsFillCaretRightFill } from "react-icons/bs";
import styled from 'styled-components';
import {userAuthStore} from '../../Auth/stores/userAuthStore'

const UserProfileSection = styled.div`
  /* position: absolute;
  left: 10px;
  bottom: 20px; */
  justify-self: flex-end;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

const UserProfileIcon = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const UserName = styled.p`
  padding: 0 5px;
  color: rgb(204, 199, 199);
  font-size: 18px;
`;

const SpanArrow = styled.span`
  color: white;
  margin-top: 5px;
`;

const ProfileModal = styled.ul<{isVisible: boolean}>`
  list-style-type: none;
  margin-left: 35px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 15px;
  width: 250px;
  z-index: 5;
  position: absolute;
  left: 210px;
  bottom: 10px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const ProfileModalItem = styled.li`
  display: flex;
  align-items: center;
  color: black;
  padding: 10px;
  border-radius: 15px;

  &:hover {
    background-color: #e0dede;
  }

  a {
    text-decoration: none;
  }
`;

const ProfileOption = styled.span`
  padding-left: 5px;
`;

export const ProfileSection = () => {
  const [profileModalStatus, setProfileModalStatus] = useState(false);

  const displayProfileModal = () => {
    setProfileModalStatus(!profileModalStatus);
  };

  const getLogOutUser = () => {
    userAuthStore.logOutUser();
  };

  return (
    <UserProfileSection onClick={displayProfileModal}>
      <UserProfileIcon alt="profile-img" src="https://img.freepik.com/premium-photo/man-sitting-meditating-floor-domestic-room-asian-style-sunrise-sunset_636705-15581.jpg" />
      <UserName>{"ssk"}</UserName>
      <SpanArrow><BsFillCaretRightFill /></SpanArrow>
      <ProfileModal isVisible={profileModalStatus}>
        <ProfileModalItem>
          <Link to="/edit-profile"><BsPersonCheck /> <ProfileOption>Profile</ProfileOption></Link>
        </ProfileModalItem>
        <ProfileModalItem onClick={getLogOutUser}>
          <BsXOctagon /> <ProfileOption>Log Out</ProfileOption>
        </ProfileModalItem>
      </ProfileModal>
    </UserProfileSection>
  );
};

export default ProfileSection;

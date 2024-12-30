import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import MainHomeTabs from './MainHomeTabs';

const MobileSideModal = styled.div`
  display: none;
  background-color: #0F172A;
  border-radius: 10px;

  @media screen and (max-width: 692px) {
    display: block;
    position: absolute;
    z-index: 1000;
    right: 0;
  }
`;

const MobileSidebarHamburger = styled(GiHamburgerMenu)`
  position: absolute;
`;

const HamburgerCloseButton = styled.button`
  margin: 10px;
  background: inherit;
  color: white;
  border: none;
  font-size: 20px;
`;

const MobileViewSideMenu = () => {
  const [isMobileModalOpen, setMobileModalStatus] = useState(false);

  return (
    <MobileSideModal>
      {!isMobileModalOpen && (
        <MobileSidebarHamburger onClick={() => setMobileModalStatus(!isMobileModalOpen)} />
      )}
      <div style={{ display: isMobileModalOpen ? "block" : "none", width: "45vw" }}>
        <HamburgerCloseButton onClick={() => setMobileModalStatus(!isMobileModalOpen)}>
          <RxCross2 />
        </HamburgerCloseButton>
        <MainHomeTabs />
      </div>
    </MobileSideModal>
  );
}

export default MobileViewSideMenu;

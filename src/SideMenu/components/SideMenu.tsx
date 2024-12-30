import React from 'react'
import styled from 'styled-components'
import ProfileSection from './ProfileSection'
import AppLogo from '../../Common/components/Logo'
import MainHomeTabs from './MainHomeTabs'
import useScreenType from '../../Common/hooks/useScreenType'
import { screenTypes } from '../../Common/constants'




// Main Side Menu Component
const SideMenu = (props: any) => {

  const screenType = useScreenType();

  const renderLapView = () => {
    return (
      <MainHomepageSideSection>
        <MainHomeSideSection>
          <LogoContainer>
            <AppLogo />
          </LogoContainer>
          <MainHomeTabs />
          <ProfileSection />
        </MainHomeSideSection>
      </MainHomepageSideSection>    
    )
  };

  const renderMobileView = () => {
    return (
      <MobileViewSideMenu>
        <MainHomeTabs />
      </MobileViewSideMenu>
    )
  }

  if (screenType !== screenTypes.LAPTOP) {
    return renderMobileView();
  } else {
    return renderLapView();
  }  

};

export default SideMenu;

// Styled Components

const MainHomepageSideSection = styled.div`
  width: 256px;
  height: 100vh;
  /* background-color: #0F172A; */
  background-color: #000000;
  margin: 0;

  * {
    overflow: hidden;
  }
`;

const MainHomeSideSection = styled.div`
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  padding: 20px 0 10px 20px;
`
const MobileViewSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100vw;
  background-color: #0F172A;
`

import React, { useState, useEffect } from 'react';
import SingleTab from './SingleTab';
import styled from 'styled-components';
import { sideMenuStore } from '../store/sideMenuStore';
import useScreenType from '../../Common/hooks/useScreenType';
import { screenTypes } from '../../Common/constants';
import Loader  from '../../Common/components/Loader';


const MainHomeTabs: React.FC = () => {

  const [tabsList, setTabsList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const screenType = useScreenType();

  const getTabsList = async () => {
    setIsLoading(true);
    const updatedTabsList = await sideMenuStore.getOptions();
    setTabsList(updatedTabsList)
    setIsLoading(false);
  }

  useEffect( ()=>{
    getTabsList()
  }, []);

  const renderLaptopView = () => {
    return (
      <MainHomeTabsContainer>
        <TabsList>
          {tabsList.map((tab: any) => ( 
            <SingleTab key={tab.tabId} tab={tab} />
          ))}
        </TabsList>
      </MainHomeTabsContainer>
    )
  };

  const renderMobileView = () => {
    return (
      <MobileViewTabsList>
        <TabsList>
          {tabsList.map((tab: any) => ( 
            <SingleTab key={tab.tabId} tab={tab} />
          ))}
        </TabsList>
      </MobileViewTabsList>  
    )
  }

  if (isLoading) {
    return (
        // <SideMenuLoader>
          <Loader />
        // </SideMenuLoader>
      );
  } else if (screenType === screenTypes.MOBILE || screenType === screenTypes.TABLET) {
    return renderMobileView();
  } else {
    return renderLaptopView();
  }
};


export default MainHomeTabs;

// styled components

const SideMenuLoader = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  left: 50%;
  top: 10%;
  overflow: hidden;
`;

const MobileViewTabsList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const MainHomeTabsContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: auto;
`;

const TabsList = styled.ul`
  list-style: none;
  /* margin: 30px 0; */
  padding: 0 20px;
  width: 100%;

  @media screen and (max-width: 1023px) {
    display: flex;
    overflow-x: auto;
  }
`;
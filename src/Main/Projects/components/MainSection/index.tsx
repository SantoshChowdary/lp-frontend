import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SideMenu from '../../../../SideMenu';
import DisplayGCs from '../DisplayGcs';
import Loader from '../../../../Common/components/Loader';
import MobileViewSideMenu from '../../../../SideMenu/components/MobileViewSideMenu';

const MyJourneyMainSection = styled.div`
  display: flex;
`;

const MyJourneySection = styled.div`
  background-color: white;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  margin-left: calc(256px - 100vw);
  width: calc(100vw - 256px);
  padding: 40px 60px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;

  @media screen and (max-width: 1024px) {
    padding: 40px 30px;
  }

  @media screen and (max-width: 692px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -100vw;
    width: 100vw;
    padding: 20px;
  }
`;

const MyJourneyGCs = styled.ul`
  margin: 30px 20px;
  padding: 0;

  @media screen and (max-width: 1024px) {
    margin: 30px 0px;
  }

  @media screen and (max-width: 692px) {
    margin: 10px;
  }
`;

const MyJourneyHeading = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

const MyJourney = (props: any) => {
  const [myJourneyGCsData, setMyJourneyGCsData] = useState<any>([]);
  const [myJourneyCoursesData, setMyJourneyCoursesData] = useState<any>([]);
  const [isLoadingMyJourneyData, setMyJourneyLoadingStatus] = useState(true);

  const getMyJourneyGCsData = async () => {
    
  };

  const getMyJourneyCoursesData = async () => {
    
  };

  useEffect(() => {
    getMyJourneyGCsData();
    getMyJourneyCoursesData();
  }, []);

  return (
    <MyJourneyMainSection>
      <SideMenu />
      <div className="mobile-hamburger-menu">
        <MobileViewSideMenu />
      </div>
      <MyJourneySection>
        {isLoadingMyJourneyData ? (
          <Loader />
        ) : (
          <>
            <MyJourneyHeading>My Journey</MyJourneyHeading>
            <MyJourneyGCs>
              {myJourneyGCsData.map((growthCycleData: any) => (
                <DisplayGCs
                  key={growthCycleData.growth_cycle_id}
                  growthCycleData={growthCycleData}
                  myJourneyCoursesData={myJourneyCoursesData}
                />
              ))}
            </MyJourneyGCs>
          </>
        )}
      </MyJourneySection>
    </MyJourneyMainSection>
  );
};

export default MyJourney;

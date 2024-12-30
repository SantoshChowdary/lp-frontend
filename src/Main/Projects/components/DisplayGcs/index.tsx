import React from 'react'
import DisplayCourses from '../DisplayCourses'
import styled from 'styled-components'

const GrowthCycleDisplay = styled.li`
  list-style: none;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const GcDisplaySection1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const GcDisplaySection2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 20px;
    opacity: 0.7;
    margin-right: 10px;
    font-family: 'Inter';
  }

  span {
    opacity: 0.5;
    font-size: 13px;
    font-weight: 500;
    font-family: 'Inter';
  }
`;

const DisplayJourneyCourses = styled.ul`
  padding-left: 10px;
`;

const PercentageDisplayDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CompletionPercentageBar = styled.div`
  width: 150px;
  height: 6px;
  border-radius: 15px;
  background-color: rgb(222, 218, 218);
  margin-right: 10px;
  position: relative;

  span {
    height: inherit;
    border-radius: 15px;
    background-color: rgb(40, 177, 40);
    position: absolute;
    z-index: 2;
  }
`;

const CompletionPercentage = styled.span`
  font-weight: 700;
  margin-right: 10px;
  opacity: 0.5;
`;

const DisplayGCs = (props: any) => {
  const { growthCycleData, myJourneyCoursesData } = props;
  const { completion_percentage, end_datetime, growth_cycle_name, growth_cycle_id, total_days_count } = growthCycleData;
  const startDate = new Date();
  const endDate = new Date(end_datetime);
  const sD = startDate.getDate() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getFullYear();
  const eD = endDate.getDate() + '-' + (endDate.getMonth() + 1) + '-' + endDate.getFullYear();

  return (
    <GrowthCycleDisplay>
      <GcDisplaySection1>
        <GcDisplaySection2>
          <h4 style={{ color: 'green' }}>{growth_cycle_name}</h4>
          <span>( {sD} to {eD} ) - {total_days_count} days</span>
        </GcDisplaySection2>
        <PercentageDisplayDiv>
          <CompletionPercentageBar>
            <span style={{ width: `${completion_percentage}%` }}></span>
          </CompletionPercentageBar>
          <CompletionPercentage>{Math.round(completion_percentage)}%</CompletionPercentage>
        </PercentageDisplayDiv>
      </GcDisplaySection1>
      <DisplayJourneyCourses>
        {myJourneyCoursesData
          .filter((i: any) => i.growth_cycle_id === growth_cycle_id)
          .map((item: any) => (
            <DisplayCourses key={item.course_id} courseDetails={item} />
          ))}
      </DisplayJourneyCourses>
    </GrowthCycleDisplay>
  );
};

export default DisplayGCs;

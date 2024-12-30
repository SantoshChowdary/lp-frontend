import React, { useState, useEffect } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import Loader from '../../../../../Common/components/Loader';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CourseModalUnitsList = styled.ul`
  margin: 10px;
  padding: 0;
  list-style-type: none;
`;

const CourseModalTopic = styled.li`
  margin: 10px 0;
  border: 1px solid #e2e8f0;
  padding: 15px;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: #ffffff;
  cursor: pointer;
  font-family: 'Inter';
`;

const CourseModalTopicContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

const CourseModalTopicContent = styled.div`
  display: flex;
`;

const ModalUnitsList = styled.div`
  padding: 0;
  margin: 15px 0;
`;

const ModalUnitItem = styled(Link)`
  display: flex;
  align-items: flex-start;
  position: relative;
  border-radius: 12px;
  padding: 10px 0;
`;

const ModalResourceCompletionCircle = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 15px 0 0;
`;

const ModalUnitCompletionCircle = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 25px;

  svg {
    width: 23px !important;
    height: 23px !important;
    padding-left: 5px;
  }
`;

const MyJourneyModalDate = styled.p`
  font-size: 10px;
  color: rgb(142, 149, 157);
  margin: 8px 0 0 0;
`;

const ModalUnitTypeTag = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  color: rgb(15, 118, 110);
  margin-top: 5px;
`;

const MyJourneyCourseUnits = (courseId: any) => {
  const [topicsData, setTopicsData] = useState<any>([]);
  const [unitsData, setUnitsData] = useState<any>([]);
  const [activeTopicTab, setActiveTopicTab] = useState<string>('');
  const [isUnitsOpened, setUnitsDisplayStatus] = useState(false);
  const [isModalResourcesLoaded, setModalResourceLoadingStatus] = useState(true);
  // console.log(unitsData);

  const filteredUnitsData: any = unitsData.filter(
    (unit: any) => unit.parent_id === activeTopicTab
  );

  const getResourcesData = async () => {
    // Fetch resources data
  };

  useEffect(() => {
    getResourcesData();
  }, []);

  const setActiveTopicStatus = (topicId: string) => {
    if (topicId === activeTopicTab) {
      setActiveTopicTab('');
    } else {
      setActiveTopicTab(topicId);
      setUnitsDisplayStatus(!isUnitsOpened);
    }
  };

  const getModalUnitType = (unitType: string) => {
    switch (unitType) {
      case 'LEARNING_SET':
        return 'Learning';
      case 'CHEAT_SHEET':
        return 'Cheat Sheet';
      case 'PRACTICE':
      case 'QUESTION_SET':
        return 'Practice';
      default:
        return 'Learning';
    }
  };

  return (
    <>
      {isModalResourcesLoaded ? (
        <Loader />
      ) : (
        <CourseModalUnitsList>
          {topicsData.map((topic: any) => (
            <CourseModalTopic key={topic.topic_id}>
              <CourseModalTopicContainer
                onClick={() => setActiveTopicStatus(topic.topic_id)}
              >
                <CourseModalTopicContent>
                  <ModalResourceCompletionCircle>
                    {/* <CompletionCircle availability_status={topic.is_topic_locked ? "LOCKED" : ""} completion_percentage={100} /> */}
                  </ModalResourceCompletionCircle>
                  <div>
                    <p>{topic.topic_name}</p>
                    <MyJourneyModalDate>01 Jan 2023</MyJourneyModalDate>
                  </div>
                </CourseModalTopicContent>
                <AiFillCaretRight />
              </CourseModalTopicContainer>

              {topic.topic_id === activeTopicTab && (
                <ModalUnitsList>
                  {filteredUnitsData.map((unitItem: any) => (
                    <ModalUnitItem to="/course" key={unitItem.unit_id}>
                      <ModalUnitCompletionCircle>
                        {/* <CompletionCircle availability_status={unitItem.is_unit_locked ? "LOCKED" : ""} completion_percentage={unitItem.completion_status === "COMPLETED" ? 100 : 10} /> */}
                      </ModalUnitCompletionCircle>
                      <div>
                        <p>{unitItem.unit_name}</p>
                        <ModalUnitTypeTag>
                          {getModalUnitType(unitItem.unit_type)}
                        </ModalUnitTypeTag>
                      </div>
                    </ModalUnitItem>
                  ))}
                </ModalUnitsList>
              )}
            </CourseModalTopic>
          ))}
        </CourseModalUnitsList>
      )}
    </>
  );
};

export default MyJourneyCourseUnits;

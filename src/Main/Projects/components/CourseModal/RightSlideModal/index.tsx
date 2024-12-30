import React, { useState, useRef, useEffect } from 'react';
import MyJourneyCourseUnits from '../DisplayModalUnits';
import styled from 'styled-components';

const RightSlideModalContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-630px')}; 
  min-height: 100vh;
  width: 624px;
  background-color: #f1f5f9;
  box-shadow: -2px 0 5px rgba(63, 62, 62, 0.5);
  transition: right 0.4s ease-out;
  z-index: 200;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media screen and (max-width: 1024px) {
    width: 100%;
    right: ${({ isOpen }) => (isOpen ? '0' : '-102vw')};
  }
`;

const ModalContent = styled.div`
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: inherit;
`;

const CourseModalContent = styled.div`
  height: 100vh;
  max-height: 1000vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ModalCourseName = styled.p`
  font-family: Inter;
  font-weight: 500;
  font-size: 24px;
  color: rgb(51, 65, 85);
  margin-right: 24px;
`;

const CourseCompletionPercentageDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const CompletionPercentageBar = styled.div<{ completionPercentage: number }>`
  width: ${({ completionPercentage }) => `${completionPercentage}%`};
  background-color: #4caf50;
  height: 10px;
  border-radius: 5px;
`;

const ModalCourseOutcome = styled.p`
  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  color: rgb(51, 65, 85);
  margin-bottom: 8px;
  margin-top: 25px;
`;

const ModalOutcomeContent = styled.span`
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.7;
  color: rgb(51, 65, 85);
`;

const ModalCoursePurpose = styled.p`
  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  color: rgb(51, 65, 85);
  margin: 15px 0;
  cursor: pointer;
`;

const ModalCoursePurposeContent = styled.ul<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  list-style-type: disc;
  opacity: 0.6;
  font-family: Inter;
  font-size: 14px;
  margin: 10px 0;
`;

const ModalMainContent = styled.div`
  margin: 20px 0;
`;

const ModalTabs = styled.div`
  padding: 24px 0 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgb(203, 213, 225);
`;

const ModalTab = styled.p<{ isActive: boolean }>`
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? 'rgb(105, 34, 235)' : 'rgb(100, 116, 139)')};
  border-bottom: ${({ isActive }) => (isActive ? '2px solid rgb(105, 34, 235)' : '4px solid transparent')};
  border-radius: 10px;
  cursor: pointer;
  padding: 0 5px;
`;

const ModalResourceDisplay = styled.div`
  padding-bottom: 70px;
`;

const RightSlideModal = ({ isOpen, onClose, courseDetails }: any) => {
  const [modalPurposeStatus, setModalPurposeStatus] = useState(true);
  const [activeModalTab, setActiveModalTab] = useState<number>(0);
  const modalRef: any = useRef(null);

  const modalTabsList = ['Course Plan', 'Cheat Sheets', 'Certification'];

  const { course_id, course_title, completion_percentage, course_meta_data } = courseDetails;
  const courseMetaData = JSON.parse(course_meta_data);

  const handleModalActiveTab = (index: number) => {
    setActiveModalTab(index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside as any);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as any);
    };
  }, [isOpen, onClose]);

  return (
    <RightSlideModalContainer isOpen={isOpen} ref={modalRef}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ModalContent>
      <CourseModalContent>
        <ModalCourseName>{course_title}</ModalCourseName>
        <CourseCompletionPercentageDiv>
          <CompletionPercentageBar completionPercentage={completion_percentage} />
          <span className="completion-percentage">{Math.round(completion_percentage)}%</span>
        </CourseCompletionPercentageDiv>
        <ModalCourseOutcome>Outcome</ModalCourseOutcome>
        <ModalOutcomeContent>{courseMetaData.outcome}</ModalOutcomeContent>
        <ModalCoursePurpose onClick={() => setModalPurposeStatus(!modalPurposeStatus)}>
          Purpose of the course {modalPurposeStatus ? <span>&rarr;</span> : <span>&darr;</span>}
        </ModalCoursePurpose>
        <ModalCoursePurposeContent isHidden={modalPurposeStatus}>
          {courseMetaData.why_this_course.map((item: any) => (
            <li key={item}>{item}</li>
          ))}
        </ModalCoursePurposeContent>
        <ModalMainContent>
          <ModalTabs>
            {modalTabsList.map((item: string, index) => (
              <ModalTab
                key={index}
                isActive={activeModalTab === index}
                onClick={() => handleModalActiveTab(index)}
              >
                {item}
              </ModalTab>
            ))}
          </ModalTabs>
        </ModalMainContent>
        <ModalResourceDisplay>
          <MyJourneyCourseUnits courseId={course_id} />
        </ModalResourceDisplay>
      </CourseModalContent>
    </RightSlideModalContainer>
  );
};

export default RightSlideModal;

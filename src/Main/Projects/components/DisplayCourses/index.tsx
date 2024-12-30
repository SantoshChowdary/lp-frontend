import React, { useState } from 'react';
import styled from 'styled-components';
// import CompletionCircle from '../../../utilities/completionCircle';
import RightSlideModal from '../CourseModal/RightSlideModal';

const Container = styled.div``;

const JourneyCourse = styled.div<{ modalOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 16px;
  margin: 10px 0;
  border: 2px solid rgb(199, 222, 250);
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  z-index: 1;
  pointer-events: ${({ modalOpen }) => (modalOpen ? 'none' : 'auto')};
`;

const JourneyCourseName = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.7;
`;

const JourneyCourseCompletion = styled.div`
  width: 30px;
  height: 30px;
  margin: -3px 15px 0 0;
`;

const DisplayCourses = ({ courseDetails }: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <JourneyCourse
        role="button"
        onClick={toggleModal}
        modalOpen={modalOpen}
      >
        <JourneyCourseName>{courseDetails.course_title}</JourneyCourseName>
        <JourneyCourseCompletion>
          {/* <CompletionCircle
            availability_status={courseDetails.availability_status}
            completion_percentage={courseDetails.completion_percentage}
          /> */}
        </JourneyCourseCompletion>
      </JourneyCourse>
      <RightSlideModal
        isOpen={modalOpen}
        onClose={closeModal}
        courseDetails={courseDetails}
      />
    </Container>
  );
};

export default DisplayCourses;

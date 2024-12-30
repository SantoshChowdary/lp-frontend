import styled from "styled-components";
import { FaClock, FaChevronRight } from 'react-icons/fa';
import { useState } from "react";
import UnitsContainer from "../Units/UnitsContainer";

const Topic = ({topicDetails} : {topicDetails: any}) => {

    const [isTopicsOpened, setTopicsDisplayStatus] = useState(false);
    // console.log(topicDetails)

    return (
      <>
        <TopicContainer onClick={() => setTopicsDisplayStatus(!isTopicsOpened)}>
            <Info>
                <Title>{topicDetails.topic_title}</Title>
                {/* <Time>
                <ClockIcon />
                9 hours, 30 mins
                </Time> */}
            </Info>
            <ArrowIcon isTopicsOpened={isTopicsOpened} />
        </TopicContainer>
        {
            !!isTopicsOpened &&
            <UnitsContainer unitsList={topicDetails.units} />
        }
      </>
    )
}

export default Topic;

const TopicContainer = styled.div`
    width: 100%;
    height: 50px;
    /* background-color: rgb(221, 231, 241); */
    /* color: rgb(2, 66, 129); */
    color: white;
    /* font-size: 32px; */
    padding: 16px;
    margin: 10px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 1.1rem;
  margin: 0;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 8px;
`;

const ClockIcon = styled(FaClock)`
  margin-right: 8px;
`;

const ArrowIcon = styled(FaChevronRight) <{ isTopicsOpened: boolean }>`
  transform: ${({ isTopicsOpened }) => (isTopicsOpened ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
  font-size: 20px;
`;

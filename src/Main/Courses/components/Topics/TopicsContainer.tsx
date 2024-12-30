import Topic from "./Topic";
import styled from "styled-components";
import courseData from "../../stores/dummyCourseData";

const TopicsContainer = () => {

    const topicsList = courseData[Math.floor(Math.random() * courseData.length)].topics

    return (
        <TopicsSubContainer>
            {
                topicsList.map((topic: any) => {
                    return <Topic topicDetails={topic} />;
                })
            }
        </TopicsSubContainer>
    )
}

export default TopicsContainer;

// styled components

const TopicsSubContainer = styled.div`
    width: 90%;
    height: 100px;
`   


import styled from "styled-components";
import CompletionCircle from "../../../Common/components/CompletionCircle";
import { Link } from "react-router-dom";


const CurrentCourseCard = () => {

    return (
        <Container>
            <HeaderContainer>
                <CourseName>Intro to React</CourseName>
                <CompletionCircle percentage={60} />
            </HeaderContainer>
            <CourseDescription>Learn the fundamentals of React, building interactive web applications with reusable components, state management, routing and more.</CourseDescription>
            <Link to="/course"><CourseButton>Continue Learning</CourseButton></Link>
        </Container>
    )
}

export default CurrentCourseCard

// styled components
const Container = styled.div`
    min-height: 220px;
    width: 400px;
    background-color: white;
    border-radius: 20px;
    padding: 30px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
`;

const CourseName = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin: 0;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CourseDescription = styled.p`
    font-size: 14px;
    opacity: 0.7;
    line-height: 1.5;
    margin: 20px 0;
`;

const CourseButton = styled.button`
    background-color: rgb(54, 74, 232);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    &:active{
        transform: scale(0.98);
    }
`;
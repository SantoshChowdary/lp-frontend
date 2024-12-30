import styled from "styled-components";
// import useScreenType from "../../../Common/hooks/useScreenType";
import LearningsContainer from "./LearningsContainer";


const MyLearningsComponent = () => {
    return (
        <MainContainer>
            <HeadElement>My Learnings</HeadElement>
            <LearningsContainer/>
        </MainContainer>
    );
};  

export default MyLearningsComponent

// styled components

const MainContainer = styled.div`
    width: 100%;
    padding: 20px;
    /* display: flex;
    flex-direction: column; */
`;

const HeadElement = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: #0F172A;
    padding: 15px;
`;
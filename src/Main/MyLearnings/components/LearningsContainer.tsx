import styled from "styled-components";
import { useState } from "react";
import LineGraph from "./LineGraph";
const LearningsContainer = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <Container>
            <LeftContainer>
                <DailyDiv isActive={activeTab === 0} onClick={() => setActiveTab(0)}>
                    Daily
                </DailyDiv>
                <DailyDiv isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
                    Weekly
                </DailyDiv>
                <DailyDiv isActive={activeTab === 2} onClick={() => setActiveTab(2)}>
                    Monthly
                </DailyDiv>
            </LeftContainer>
            <RightContainer>
                <LineGraph activeTab={activeTab} />
            </RightContainer>
        </Container>
    )
};

export default LearningsContainer;

//styled components
const Container = styled.div`
    width: 100%;
    box-shadow: 0px 0px 4px #bfbcbc;
    padding: 10px 30px;
    margin-top: 30px;
    border-radius: 10px;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    gap: 40px;
    overflow: auto;


`;
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;


`;
const RightContainer = styled.div`

`;
const DailyDiv = styled.div<{isActive: boolean}>`
    width: 150px;
    height: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px #bfbcbc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({isActive}) => isActive ? 'white' : '#3a3b3b'};
    font-weight: 600;
    background-color: ${({isActive}) => isActive ? '#b9b6f4' : 'transparent'};
    /* transition: all 0.5s ease-in-out; */

    &:hover {
        background-color: #c9c7ee;
    };
`;


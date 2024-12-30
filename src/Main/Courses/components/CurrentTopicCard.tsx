import { useEffect } from "react";
import styled from "styled-components";
import { LuPanelRightOpen, LuPanelLeftOpen } from "react-icons/lu";
import courseStore from "../stores/courseStore";

const CurrentTopicCard = ({changeSideMenuStatus, isSideMenuOpen} : {changeSideMenuStatus: () => void, isSideMenuOpen: boolean}) => {

    const handleClose = () => {
        changeSideMenuStatus();
    }

    return (
      <MainContainer>
        <CloseButton onClick={handleClose}>
            {isSideMenuOpen ? <LuPanelRightOpen fontSize={30} /> : <LuPanelLeftOpen fontSize={30} />}
        </CloseButton>
        <div>
            {/* <p>{courseStore.activeTopicDetails.name} -{'>'} {courseStore.activeUnitDetails.name}</p> */}
        </div>
      </MainContainer>
    )
};

export default CurrentTopicCard;

// styled components

const MainContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 1px 1px 2px grey;
`;

const CloseButton = styled.button`
    width: 40px;
    height: 100%;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    /* color: white; */
`;
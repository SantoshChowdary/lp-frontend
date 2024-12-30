import TopicHeader from "./Topics/TopicHeader";
import TopicsContainer from "./Topics/TopicsContainer";
import styled from "styled-components";


const CourseSideMenu = ({isSideMenuOpen, changeSideMenuStatus}: {isSideMenuOpen: boolean, changeSideMenuStatus: () => void}) => {

    return (
        <CourseSectionLeft isSideMenuOpen={isSideMenuOpen}>
            {
                isSideMenuOpen &&
                <Container>
                    <TopicHeader changeSideMenuStatus={changeSideMenuStatus} />
                    <TopicsContainer />
                </Container>
            } 
        </CourseSectionLeft>
    )
}

export default CourseSideMenu;

// styled components

const CourseSectionLeft = styled.div<{isSideMenuOpen: boolean}>`
    width: ${({isSideMenuOpen}) => isSideMenuOpen ? '256px' : '0'};
    height: 100%;
    /* display: ${({isSideMenuOpen}) => isSideMenuOpen ? 'flex' : 'none'}; */
    flex-direction: column;
    background-color: #080828;
    transition: width 0.5s ease; 
    
    & ::-webkit-scrollbar {
        display: none;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-x: hidden;
    overflow-y: auto;
`;
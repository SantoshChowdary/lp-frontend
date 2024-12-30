import styled from "styled-components";

const MainContentDisplaySection = ({isSideMenuOpen} : {isSideMenuOpen: boolean}) => {
    return (
        <MainContainer>
            <iframe title="video" width="80%" height="80%" src="https://www.youtube.com/embed/cI0TVuYsLBo" allow="accelerometer; autoplay;"
            ></iframe>
        </MainContainer>
    )
};

export default MainContentDisplaySection;

// styled components

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
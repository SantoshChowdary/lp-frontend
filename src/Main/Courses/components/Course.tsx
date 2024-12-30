import useScreenType from "../../../Common/hooks/useScreenType";
import styled from "styled-components";
import {Header} from '../../../Header/index';
import CourseSideMenu from "./CourseSideMenu";
import { useEffect, useState } from "react";
import CurrentTopicCard from "./CurrentTopicCard";
import MainContentDisplaySection from "./MainContentDisplaySection";


// Course Main Section component
const CourseMainSection = () => {

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

    const changeSideMenuStatus = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    }

    const screenType = useScreenType();

    useEffect(()=>{
        if (screenType !== "LAPTOP") {
            setIsSideMenuOpen(false);
        } else{
            setIsSideMenuOpen(true);
        }
    }, [screenType]);

    return (
        <CourseMainSectionContainer>
            <Header />
            <CourseSection>
                <CourseSideMenu isSideMenuOpen={isSideMenuOpen} changeSideMenuStatus={changeSideMenuStatus} />
                <CourseSectionRight isSideMenuOpen={isSideMenuOpen}>
                    <CurrentTopicCard changeSideMenuStatus={changeSideMenuStatus} isSideMenuOpen={isSideMenuOpen} />
                    <MainContentDisplaySection isSideMenuOpen={isSideMenuOpen} />
                </CourseSectionRight>
            </CourseSection>
        </CourseMainSectionContainer>
    )
}

export default CourseMainSection;

// styled components
const CourseMainSectionContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const CourseSection = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
`;



const CourseSectionRight = styled.div<{isSideMenuOpen : boolean}>`
    width: ${({isSideMenuOpen}) => isSideMenuOpen ? 'calc(100vw - 256px)' : '100vw'};
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    transition: width 0.5s ease;
`;

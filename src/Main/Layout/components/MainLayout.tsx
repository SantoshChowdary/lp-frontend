import SideMenu from "../../../SideMenu/components/SideMenu";
import styled from "styled-components";

import HomeComponent from "../../Home";
import Home from "../../Home/components/Home/MainHomePage";
import ProjectsComponent from "../../Projects";
import OtherCoursesComponent from "../../OtherCourses";
import QuestionBankComponent from "../../QuestionBank";
import ReactAceEditor from "../../CodePlayGround/components/codeEditor/AceEditor";
import MyLearningsComponent from "../../MyLearnings";
import Bookmarks from "../../Bookmarks/index";
import CourseMainSection from "../../Courses/components/Course";


const MainLayout = ({path} : {path: string}) => {

  const renderMainContent = () => {
    switch (path) {
      case "home":
        // return <HomeComponent />
        return (
          <MainLayoutContainer>
            <SideMenu />
            <MainContentContainer>
              <Home />
            </MainContentContainer>
          </MainLayoutContainer>
        )
      case "my-learnings":
        return (
          <MainLayoutContainer>
            <SideMenu />
            <MainContentContainer>
              <MyLearningsComponent />
            </MainContentContainer>
          </MainLayoutContainer>
        )
      case "all-courses":
        // return <OtherCoursesComponent />
        return (
          <MainLayoutContainer>
            <SideMenu />
            <MainContentContainer>
              <OtherCoursesComponent />
            </MainContentContainer>
          </MainLayoutContainer>
        )
        case "course":
          // return <OtherCoursesComponent />
          return (
            <CourseMainSection />
          )
      case "question-bank":
        // return <QuestionBankComponent />
        return (
          <MainLayoutContainer>
            <SideMenu />
            <MainContentContainer>
            <QuestionBankComponent />
            </MainContentContainer>
          </MainLayoutContainer>
        )
      case "bookmarks":
        // return <MyLearningsComponent />
        return (
          <MainLayoutContainer>
            <SideMenu />
            <MainContentContainer>
              <Bookmarks />
            </MainContentContainer>
          </MainLayoutContainer>
        )
      case "code-playground":
        // return <ReactAceEditor />
        return (
            <ReactAceEditor />
        )
      default:
        // return <HomeComponent />
        return (
          <MainLayoutContainer>
            <SideMenu />
            <MainContentContainer>
              {/* {renderMainContent()} */}
              <HomeComponent />
            </MainContentContainer>
          </MainLayoutContainer>
        )
    }
  }

  return renderMainContent()
}

export default MainLayout;

// styled components
const MainLayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0F172A;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column-reverse;

  }
`

const MainContentContainer = styled.div`
  height: 100vh;
  width: calc(100vw - 256px);
  background-color: #f7f8f9;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  /* padding: 20px; */

  @media screen and (max-width: 1023px) {
    width: 100vw;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: calc(100vh - 100px);
  }
  
`

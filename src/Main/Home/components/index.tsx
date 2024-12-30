import styled from "styled-components";
import CurrentCourseCard from "./CurrentCourseCard";
import BasicDateCalendar from "./DailyCalendar";


const HomeComponent = () => {
    return (
        <Container>
            <CurrentCourseCard />
            {/* <BasicDateCalendar /> */}
        </Container>
    )
}

export default HomeComponent;

// styled components
const Container = styled.div`
    padding: 20px;

`
import BackGroundGradientEl from "./BackGroundGradient";
import StudentStories from "./Stories";
import { StyledStoriesDiv } from "./StyledComponents";

const StudentSuccessStories = () => {
    return ( 
        <StyledStoriesDiv>
            {/* background gradient component */}
            <BackGroundGradientEl />

            {/* Success stories on top */}
            <StudentStories />
        </StyledStoriesDiv>
    )
}

export default StudentSuccessStories;
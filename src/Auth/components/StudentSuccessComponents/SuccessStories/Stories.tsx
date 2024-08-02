import { ProfileImageDiv, ProfileUserDiv, StoriesUlEl, StoryCardLi, StyledSuccessStoriesDiv } from "./StyledComponents";
import { v4 as uuidv4 } from 'uuid';
import useScreenType from "../../../../Common/hooks/useScreenType";

const roughData = {
    name : "testing",
    role : "Software Engineer",
    company : "Nxtwave",
    profileImageUrl : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    companyLogoUrl : "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/Optum.png"
}
;

const studentsData = new Array(30).fill(roughData);

const StoryCard = (props: any) => {

    const {name, role, company, profileImageUrl, companyLogoUrl} = props.userData;

    return (
        <StoryCardLi>
            <ProfileImageDiv>
                <img src={profileImageUrl} alt={name} />
            </ProfileImageDiv>
            <ProfileUserDiv>
                <p>{name}</p>
                <p>{role}</p>
                <div>
                    <img src={companyLogoUrl} alt={company} />
                </div>
            </ProfileUserDiv>
        </StoryCardLi>
    )
}

const StudentStories = () => {

    const screenType = useScreenType()


    const renderSuccessStories = (num : number) => {
        return (
            <StoriesUlEl reversed={num === 1}>
                {
                    studentsData.map((item: any) => (
                        <StoryCard userData={item} key={uuidv4()} />
                    ))
                }
            </StoriesUlEl>
        )
    }
    

    return (
        <StyledSuccessStoriesDiv>
            {renderSuccessStories(0)}
            {renderSuccessStories(1)}
            {renderSuccessStories(0)}
            {renderSuccessStories(1)}
            {/* {renderSuccessStories(0)} */}
            {/* {renderSuccessStories(1)} */}
            {/* {(screenType === "LAPTOP") && renderSuccessStories(0)} */}
        </StyledSuccessStoriesDiv>
    )
};

export default StudentStories
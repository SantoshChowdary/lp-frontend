import { StyledHeaderDiv, StyledHeaderEl, StyledSpanEl } from "./StyledComponents";
const StudentSuccessHeaderComponent = () => {
    return (
        <StyledHeaderDiv>
            <StyledHeaderEl>
                <StyledSpanEl>
                    Success Stories
                </StyledSpanEl> from 1000s of <br /> Students Like You
            </StyledHeaderEl>
        </StyledHeaderDiv>
    )
}

export default StudentSuccessHeaderComponent;
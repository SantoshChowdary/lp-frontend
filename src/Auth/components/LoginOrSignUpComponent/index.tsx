import LoginOrSignUpComponent from "./LoginContainer";
import VerifyPasswordComponent from "./VerifyContainer";
import StudentSuccessComponent from "../StudentSuccessComponents";
import { LaptopContainer, LaptopMainDiv, LaptopInputDiv, MobileContainer, MobileInputDiv, MobileMainDiv } from "./StyledComponents";
import useScreenType from "../../../Common/hooks/useScreenType";
import { useLocation } from "react-router-dom";
import SignUpComponent from "./SignUpComponent";
const MainLoginComponent = () => {

    const screenType = useScreenType();
    const location = useLocation();
    
    const renderAuthComponent = () => {
        if (location.pathname === "/verify"){
            return <VerifyPasswordComponent />
        } else if (location.pathname === "/signup"){
            return <SignUpComponent />
        } else {
            return <LoginOrSignUpComponent />
        }

    }

    const renderLaptopView = () => {
        return (
            <LaptopMainDiv>
                <LaptopContainer>
                    <LaptopInputDiv>
                        {renderAuthComponent()}
                    </LaptopInputDiv>
                </LaptopContainer>
                <LaptopContainer>
                    <StudentSuccessComponent />
                </LaptopContainer>
            </LaptopMainDiv>
        )
    }

    const renderTabletOrMobileView = () => {
        return (
            <MobileMainDiv>
                <MobileContainer>
                    <MobileInputDiv>
                        {renderAuthComponent()}
                    </MobileInputDiv>
                </MobileContainer>
            </MobileMainDiv>
        )
    }

    if (screenType === "LAPTOP" || screenType === "TABLET"){
        return renderLaptopView()
    } else {
        return renderTabletOrMobileView()
    }
}

export default MainLoginComponent;
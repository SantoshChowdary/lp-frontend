import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// component
const TopicHeader = ({ changeSideMenuStatus }: { changeSideMenuStatus: () => void }) => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    const handleClose = () => {
        changeSideMenuStatus();
    }

    return (
        <TopicHeaderContainer>
            <TopicHeaderBackButton onClick={handleBack}>
                <AiOutlineArrowLeft size={20} />
            </TopicHeaderBackButton>
            <p>TOPICS</p>
            <TopicHeaderCloseButton onClick={handleClose}>
                <AiOutlineClose size={20} />
            </TopicHeaderCloseButton>
        </TopicHeaderContainer>
    )
}

export default TopicHeader;

//styled components

const TopicHeaderContainer = styled.div`
    width: 90%;
    margin: 15px 10px;
    padding: 10px;
    border-radius: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(62deg, rgb(123, 176, 225) 0%, rgb(6, 125, 236) 100%);
`;

const TopicHeaderBackButton = styled.button`
    width: 40px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

const TopicHeaderCloseButton = styled.button`
    width: 40px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

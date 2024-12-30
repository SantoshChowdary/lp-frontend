import HeaderTimer from "./HeaderTimer";
import { IoIosTimer } from "react-icons/io";
import styled from "styled-components";
import Tooltip from "../../Common/components/Tooltip";
import { timerStore } from "../store/timerStore";
import { observer } from "mobx-react-lite";

const TimerMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    
    @media (min-width: 768px) {
        margin-right: 20px;
    };

    @media screen and (max-width: 768px) {
        display:  none;
    };
`;

const TimerButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainTimerComponent = () => {
    const isToggled = timerStore.getIsToggled();

    const handleClick = () => {
        timerStore.toggleToggled();
    };

    return (
        <div>
            {isToggled ? (
                <HeaderTimer onClick={handleClick} />
            ) : (
                <TimerMainContainer>
                    <Tooltip text="Timer">
                        <TimerButton onClick={handleClick}>
                            <IoIosTimer />
                        </TimerButton>
                    </Tooltip>
                </TimerMainContainer>
            )}
        </div>
    );
};

export default observer(MainTimerComponent);

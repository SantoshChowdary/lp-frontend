import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { AiOutlinePlayCircle, AiOutlinePauseCircle, AiOutlineSync, AiOutlineLeft } from "react-icons/ai";
import { timerStore } from '../store/timerStore';


// styled components
const Button = styled.button`
    background-color: transparent;
    border: none;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const TImerMainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    background-color: #cbdef8;
    padding: 8px;
    border-radius: 5px;
`;


const TimeTextDiv = styled.div`
    margin: 0 5px;
    width: 70px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;

// typescript
interface HeaderTimerProps {
    onClick: () => void;
};

// main component
const HeaderTimer = (props: HeaderTimerProps) => {
    const time = timerStore.getTime();
    const isRunning = timerStore.getIsRunning();

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        const result = [hours, minutes, remainingSeconds]
            .map(val => val < 10 ? "0" + val : val)
            .join(":");
        return result;
    };

    const handleStartPause = () => {
        timerStore.toggleTimer();
    };

    const handleReset = () => {
        timerStore.resetTimer();
    };

    return (
        <TImerMainDiv>
            <Button onClick={props.onClick}>
                <AiOutlineLeft size={15} style={{marginRight: '10px'}} />
            </Button>
            <Button onClick={handleStartPause}>
                {
                isRunning ? 
                    <AiOutlinePauseCircle />
                    : 
                    <AiOutlinePlayCircle />
                }
            </Button>
            <TimeTextDiv>{formatTime(time)}</TimeTextDiv>
            <Button onClick={handleReset}>
                <AiOutlineSync />
            </Button>
        </TImerMainDiv>
    );
};

export default observer(HeaderTimer);

import styled, {keyframes} from "styled-components";

export const GradientEl = styled.div`
    width: 50%;
    height: 50%;
    background-image: radial-gradient(rgb(186, 226, 251), white);
    filter: blur(2.5rem) ;
    position: absolute;
    inset: 0;
    margin: 10% auto;
    /* border-radius: 50%; */
`

export const StyledStoriesDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

export const StyledSuccessStoriesDiv = styled.div`
    width: 100%;
    height : 100%;
`

const UlAnimation = keyframes`
    0%{
        transform: translateX(0px);
    } 100% {
        transform: translateX(-100%);
    }
`
export const StoriesUlEl = styled.ul<{reversed : boolean}>`
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* overflow: hidden; */
    margin: 12px 0;
    animation: ${UlAnimation} 25s linear infinite ${props => props.reversed ? "reverse" : "normal"};
`

export const StoryCardLi = styled.li`
    border : 1px solid #d0d0d0;
    border-radius: 20px;
    padding: 0 50px 0 0;
    margin: 0 10px;
    height: 90px;
    display: flex;
    justify-content: space-around;
`

export const ProfileImageDiv = styled.div`
    width: 45px;
    height: 45px;
    margin: 15px 10px 10px;
    

    img {
        width: 100%;
        height: 100%;
    }
`

export const ProfileUserDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 5px;
    width: 80%;
    background: transparent;

    img {
        height: 27px;
        width: 100px;
    }

    :first-child {
        font-family: Inter;
        font-weight: 600;
        font-size: 14px;
        color: rgb(30, 41, 59);
        margin-bottom: 6px;
    }
    :nth-child(2){
        font-family: Inter;
        font-size: 12px;   
        color: rgb(71, 85, 105);
        margin-bottom: 5px;
    }
`



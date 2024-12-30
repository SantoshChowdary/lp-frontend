import styled, {keyframes} from "styled-components";
import Unit from "./Unit";

const UnitsContainer = ({unitsList} : {unitsList: Array<any>}) => {

    return (
        <MainContainer>
            {unitsList.map((unit, index) => <Unit unitDetails={unit} key={index} />)}
        </MainContainer>
    )
};

// Styled Components

const MainContainer = styled.div`
    width: 100%;
    background-color: rgba(254, 254, 255, 1.5);
    color: rgb(2, 66, 129);
    padding: 10px;
    margin: 5px 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export default UnitsContainer;
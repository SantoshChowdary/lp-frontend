import styled from "styled-components"
const Unit = (unitDetails : any) => {
    return (
      <UnitContainer>
        <UnitName>{unitDetails.unitDetails.unit_title}</UnitName>
      </UnitContainer>
    )
}

export default Unit;

// styled components
const UnitContainer = styled.div`
    width: 100%;
    padding: 10px 12px;
    margin: 10px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.1);
    background-color: rgb(228, 229, 230);
    user-select: none;

    &:hover {
        background-color: rgb(179, 210, 241);
        box-shadow: 0 0 6px 6px rgb(179, 210, 241);
    };
`
const UnitName = styled.p`
  font-size: 14px;
  width: 70%;
  margin: 0;
`;
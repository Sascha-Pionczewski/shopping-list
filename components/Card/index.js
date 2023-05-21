import styled from "styled-components";

export default function Card() {
  return (
    <StyledCard>
      <StyledText>Artikel</StyledText>

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 82vw;
  height: 25px;
  border: black solid 1px;
  padding-left: 20px;
  margin: auto;
`;

const StyledText = styled.p`
  margin: 0;
  padding: 0;
`;

import styled from "styled-components";

export default function Heading() {
  return (
    <StyledHeading>
      <h1>Shopping List</h1>
      <p>was brauchen wir..?</p>
    </StyledHeading>
  );
}

const StyledHeading = styled.div`
  background-color: lightgray;
  margin: 0;
  padding: 5px 0 10px 0;
  text-align: center;
`;

import styled from "styled-components";

export default function Heading() {
  return (
    <Container>
      <Title>Shopping List</Title>
      <Subtitle>Was brauchen wir..?</Subtitle>
    </Container>
  );
}

const Container = styled.div`
  background-color: lightgray;
  padding: 10px 0;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 16px;
`;

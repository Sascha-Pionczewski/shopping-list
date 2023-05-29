import { useState } from "react";
import styled from "styled-components";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Artikel"
        />
        <Button type="submit">✅</Button>
      </FormContainer>
      <CardContainer>
        {items.map((item, index) => (
          <Card key={index}>
            <Text>{item}</Text>
            <DeleteButton onClick={() => handleDelete(index)}>X</DeleteButton>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 75vw;
  max-width: 400px;
  padding: 10px 20px;
  font-size: 18px;
  border: 2px solid #202020;
  border-radius: 5px;
  outline: none;
  font-family: "Bangers";

  &:focus {
    border-color: #202020;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  background-color: #202020;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #303030;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 82vw;
  max-width: 400px;
  height: 50px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
`;

const DeleteButton = styled.button`
  padding: 4px 8px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #e74c3c;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;

import styled from "styled-components";
import { useState } from "react";

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
    <>
      <InputContainer onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Artikel"
        />
        <StyledButton type="submit">✅</StyledButton>
      </InputContainer>
      {items.map((item, index) => (
        <StyledCard key={index}>
          <StyledText>{item}</StyledText>
          <div>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </StyledCard>
      ))}
    </>
  );
}

const StyledInput = styled.input`
  width: 75vw;
  max-width: 400px;
  padding: 10px 20px;
  margin: 20px 0 10px 0;
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

const StyledButton = styled.button`
  margin: 20px 0 10px 0;
`;

const InputContainer = styled.form`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 82vw;
  height: 25px;
  border: black solid 1px;
  border-radius: 5px;
  padding-left: 20px;
  margin: auto;
`;

const StyledText = styled.p`
  margin: 0;
  padding: 0;
`;

import React from "react";
import styled from "styled-components";

export default function Form() {
  return (
    <InputContainer>
      <StyledInput type="text" placeholder="Artikel" />
      <StyledButton>✅</StyledButton>
    </InputContainer>
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

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

export const StyledSelect = styled.select`
  margin-top: 6px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: max-content;

  &:focus {
    outline: none;
    border-color: #1976d2;
  }
`;
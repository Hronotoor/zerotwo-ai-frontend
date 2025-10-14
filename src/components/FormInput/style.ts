import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

export const StyledInput = styled.input<{ $small?: boolean }>`
  width: ${({ $small }) => ($small ? "160px" : "100%")};
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;

  &:focus {
    border-color: #1976d2;
    outline: none;
  }
`;
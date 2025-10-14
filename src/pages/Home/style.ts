import styled from "styled-components";
import { Button, Typography } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0px auto;
  font-family: "Roboto", sans-serif;
  padding: 20px;
  height: 100vh;
  align-items: center;
`;

export const Title = styled(Typography)`
  text-align: start;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
  width: 100%;
  padding: 32px;
  background-color: #1589be5b;
  border: 3px solid #1588beff;
`;

export const ErrorText = styled.p`
  color: red;
  margin: 0;
  font-size: 14px;
`;

export const StyledButton = styled(Button)`
  width: fit-content;
`;

export const ResultContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const ResultPre = styled.div`
  max-width: 80%;
  overflow-x: auto;
  padding-bottom: 32px;

  h3,
  h4,
  h5,
  h6 {
    color: #632954ff;
    margin-top: 12px;
  }

  strong {
    color: #5a2c5aff;
  }

  em {
    color: #be0202ff;
  }

  ul,
  ol {
    margin-left: 20px;
  }

  code {
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

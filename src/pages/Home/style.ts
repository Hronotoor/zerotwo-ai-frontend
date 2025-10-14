import styled from "styled-components";
import { Button, Typography } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0px auto;
  font-family: "Roboto", sans-serif;
  padding: 20px;
`;

export const Title = styled(Typography)`
  text-align: start;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
`;

export const ResultPre = styled.div`
  background: #111;
  color: #eee;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;

  h3,
  h4,
  h5,
  h6 {
    color: #90caf9;
    margin-top: 12px;
  }

  strong {
    color: #ffcc80;
  }

  em {
    color: #a5d6a7;
  }

  ul,
  ol {
    margin-left: 20px;
  }

  code {
    background: #222;
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

import { Box, Button, styled, Typography } from "@mui/material";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0px auto;
  font-family: "Roboto", sans-serif;
  height: 100vh;
  align-items: center;
`;

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: "start",
  fontSize: "48px",
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    fontWeight: 600,
  },
}));

export const FormContainer = styled(Box)`
  width: 100%;
  padding: 16px;
`;

export const Form = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  width: 100%;
  padding: 32px;
  background-color: #1589be5b;
  border: 3px solid #1588beff;
  border-radius: 16px;
  margin: 0 auto;
`;

export const ErrorText = styled("p")`
  color: red;
  margin: 0;
  font-size: 14px;
`;

export const StyledButton = styled(Button)`
  width: fit-content;
  margin-top: 24px;
  padding: 12px 36px;
  background-color: #1588beff;
  font-weight: 700;
`;

export const ResultContainer = styled("div")`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #1589be5b;
  padding: 24px 0;
  border-top: 3px solid #1588beff;
`;

export const ResultPre = styled("div")`
  max-width: 80%;
  overflow-x: auto;
  padding-bottom: 32px;
  line-height: 2rem;

  h1, h2, h3, h4, h5, h6 {
    color: #632954ff;
    margin-top: 12px;
    margin-bottom: 8px;
    font-weight: 600;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.8rem; }
  h3 { font-size: 1.6rem; }
  h4 { font-size: 1.4rem; }
  h5 { font-size: 1.2rem; }
  h6 { font-size: 1.1rem; }

  ul, ol {
    margin-left: 20px;
    font-size: 1rem;
    line-height: 1.6;
  }

  li {
    margin-bottom: 8px;
    font-size: 1rem;
  }

  strong {
    color: #5a2c5aff;
  }

  em {
    color: #be0202ff;
    font-weight: 600;
  }

  code {
    padding: 2px 4px;
    border-radius: 4px;
  }

  & > * {
    font-size: 1rem;
  }
`;

export const InputContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const TitleContainer = styled(Box)`
  width: 100%;
  background-color: #1589be5b;
  padding: 32px;
  border-bottom: 3px solid #1588beff;
`;

export const LoadingContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LoadingSpinner = styled("div")`
  width: 50px;
  height: 50px;
  border: 4px solid #1589be5b;
  border-top: 4px solid #1588beff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

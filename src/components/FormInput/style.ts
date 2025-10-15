import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiFormLabel-root": {
    color: "#000000",
    "&.Mui-focused": {
      color: "#000000",
    },
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#87d3f7",
  },
}));

export const StyledAgeInput = styled(TextField)({
  width: "160px",
  "& .MuiFormLabel-root": {
    color: "#000000ff",
    "&.Mui-focused": {
      color: "#000000ff",
    },
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#87d3f7",
    "& .MuiOutlinedInput-notchedOutline": {
    },
  },
  "& .MuiOutlinedInput-input": {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #87d3f7 inset",
      WebkitTextFillColor: "#000000",
      borderRadius: "inherit",
    },
  },
});
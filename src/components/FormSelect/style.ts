import { FormControl } from "@mui/material";
import styled from "styled-components";

export const StyledFormControl = styled(FormControl)({
  "& .MuiFormLabel-root": {
    color: "#000000",
    "&.Mui-focused": {
      color: "#000000",
    },
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#87d3f7",
    width: "100px",
  },
});
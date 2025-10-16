import {
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";
import { StyledFormControl } from "./style";

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: (e: SelectChangeEvent) => void;
  options: { value: string; label: string }[];
}

const FormSelect = ({
  label,
  name,
  value,
  required = false,
  onChange,
  options,
}: FormSelectProps) => {
  return (
    <StyledFormControl fullWidth>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        required={required}
      >
        <MenuItem value="">
          <em>Выберите...</em>
        </MenuItem>
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default FormSelect;

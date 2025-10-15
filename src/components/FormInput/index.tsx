import { StyledTextField } from "./style";

interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  small?: boolean;
  multiline?: boolean;
  minRows?: number;
}

const FormInput = ({
  label,
  name,
  value,
  onChange,
  required,
  type = "text",
  multiline = false,
  minRows = 1,
}: FormInputProps) => (
  <StyledTextField
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    required={required}
    type={type}
    multiline={multiline}
    minRows={minRows}
    variant="outlined"
    fullWidth
  />
);

export default FormInput;

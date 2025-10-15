import { StyledAgeInput } from "./style";

interface AgeInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const AgeInput = ({
  label,
  name,
  value,
  onChange,
  required,
}: AgeInputProps) => (
  <StyledAgeInput
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    required={required}
    type="number"
    variant="outlined"
  />
);

export default AgeInput;
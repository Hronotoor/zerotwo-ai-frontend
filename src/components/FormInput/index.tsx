import { StyledLabel, StyledInput } from "./style";

interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  small?: boolean;
}

const FormInput = ({
  label,
  name,
  value,
  onChange,
  required,
  type = "text",
  small = false,
}: FormInputProps) => (
  <StyledLabel>
    {label}
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      $small={small}
    />
  </StyledLabel>
);

export default FormInput;

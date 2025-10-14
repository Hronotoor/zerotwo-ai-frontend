import { StyledLabel, StyledSelect } from "./style";

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
    <StyledLabel>
      {label}
      <StyledSelect name={name} value={value} onChange={onChange} required={required}>
        <option value="">Выберите...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </StyledSelect>
    </StyledLabel>
  );
};

export default FormSelect;
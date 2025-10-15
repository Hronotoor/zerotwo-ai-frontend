import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { askAI } from "../../services/api";
import {
  Container,
  Title,
  Form,
  ErrorText,
  StyledButton,
  ResultContainer,
  ResultPre,
  InputContainer,
} from "./style";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import { disclaimerText } from "../../constants/disclaimerText";
import CustomTooltip from "../../components/Tooltip";
import type { SelectChangeEvent } from "@mui/material";
import AgeInput from "../../components/FormInput/AgeInput";

const inputFields = [
  {
    label: "Аллергические реакции",
    name: "allergies",
    text: "Текст для аллергий",
  },
  { label: "Диагноз", name: "diagnosis", text: "Текст для показаний" },
  { label: "Назначения", name: "prescriptions", text: "Текст для диагноза" },
];

const Home = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    allergies: "",
    diagnosis: "",
    prescriptions: "",
    other: "",
  });

  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { gender, age, allergies, diagnosis, prescriptions } = formData;

    if (!gender || !age || !allergies || !diagnosis || !prescriptions) {
      return "Все поля обязательны для заполнения.";
    }

    const ageNum = Number(age);
    if (isNaN(ageNum) || ageNum < 0 || ageNum > 100) {
      return "Возраст должен быть числом от 0 до 100.";
    }

    return null;
  };

  const handleSubmit = async () => {
    setErrors(null);
    setAnswer("");

    const validationError = validateForm();
    if (validationError) {
      setErrors(validationError);
      return;
    }

    setLoading(true);

    try {
      const dataToSend = {
        ...formData,
        other: formData.other || undefined,
      };

      const result = await askAI(dataToSend);
      setAnswer(result);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Неизвестная ошибка";
      setAnswer("Произошла ошибка: " + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title variant="h4">Медицинский ассистент</Title>

      <Form>
        <FormSelect
          label="Пол*"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          options={[
            { value: "Муж", label: "Муж" },
            { value: "Жен", label: "Жен" },
          ]}
        />

        <AgeInput
          label="Возраст"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        {inputFields.map(({ label, name, text }) => (
          <InputContainer key={name}>
            <FormInput
              label={label}
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              required
              multiline={true}
              minRows={1}
            />
            <CustomTooltip text={text} />
          </InputContainer>
        ))}

        <InputContainer>
          <FormInput
            label="Другое (необязательно)"
            name="other"
            value={formData.other}
            onChange={handleChange}
            multiline={true}
            minRows={1}
          />
          <CustomTooltip text="Дополнительная информация о пациенте" />
        </InputContainer>

        {errors && <ErrorText>{errors}</ErrorText>}

        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Загрузка..." : "Отправить"}
        </StyledButton>
      </Form>

      {(loading || answer) && (
        <ResultContainer>
          <ResultPre>
            {loading ? (
              <ReactMarkdown>{disclaimerText}</ReactMarkdown>
            ) : (
              <ReactMarkdown>{answer}</ReactMarkdown>
            )}
          </ResultPre>
        </ResultContainer>
      )}
    </Container>
  );
};

export default Home;

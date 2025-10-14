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
} from "./style";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";

const inputFields = [
  { label: "Аллергические реакции", name: "allergies" },
  { label: "Диагноз", name: "diagnosis" },
  { label: "Назначения", name: "prescriptions" },
];

const Home = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    allergies: "",
    diagnosis: "",
    prescriptions: "",
  });

  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      const result = await askAI(formData);
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
          label="Пол"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          options={[
            { value: "Муж", label: "Муж" },
            { value: "Жен", label: "Жен" },
          ]}
        />

        <FormInput
          label="Возраст"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
          small 
        />

        {inputFields.map(({ label, name }) => (
          <FormInput
            key={name}
            label={label}
            name={name}
            value={formData[name as keyof typeof formData]}
            onChange={handleChange}
            required
          />
        ))}

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

      {answer && (
        <ResultContainer>
          <ResultPre>
            <ReactMarkdown>{answer}</ReactMarkdown>
          </ResultPre>
        </ResultContainer>
      )}
    </Container>
  );
};

export default Home;

import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { SelectChangeEvent } from "@mui/material";
import { askAI } from "../../services/api";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import { disclaimerText } from "../../constants/disclaimerText";
import CustomTooltip from "../../components/Tooltip";
import AgeInput from "../../components/FormInput/AgeInput";
import { inputFields, OTHER } from "../../constants/intputFields";
import {
  Container,
  Title,
  Form,
  ErrorText,
  StyledButton,
  ResultContainer,
  ResultPre,
  InputContainer,
  TitleContainer,
  FormContainer,
  LoadingContainer,
  LoadingSpinner,
} from "./style";

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
  const resultContainerRef = useRef<HTMLDivElement>(null);

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

  const scrollToResult = () => {
    setTimeout(() => {
      resultContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
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
    scrollToResult();

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
      <TitleContainer>
        <Title>MedAI Assistant</Title>
      </TitleContainer>

      <FormContainer>
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
            <CustomTooltip text={OTHER} />
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
      </FormContainer>

      {loading && (
        <LoadingContainer ref={resultContainerRef}>
          <LoadingSpinner />
        </LoadingContainer>
      )}

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

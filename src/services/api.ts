export interface PatientData {
  gender: string;
  age: string | number;
  allergies: string;
  diagnosis: string;
  prescriptions: string;
  other?: string;
}
export const askAI = async (data: PatientData) => {
  try {
    const response = await fetch("https://zerotwo-ai-backend.onrender.com/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Ошибка сети");
    }
    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || "Ошибка обработки запроса");
    }
    return result.response;
  } catch (error) {
    console.error("Ошибка:", error);
    throw error;
  }
};
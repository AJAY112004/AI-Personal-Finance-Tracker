import axios from "axios";

const API_URL =
  "http://localhost:5000/api/insights";

export const getInsights = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const sendInsightPrompt = async (
  prompt
) => {
  const response = await axios.post(
    `${API_URL}/chat`,
    {
      prompt,
    }
  );

  return response.data;
};

export const getRecommendations =
  async () => {
    const response = await axios.get(
      `${API_URL}/recommendations`
    );

    return response.data;
  };

export const getForecast = async () => {
  const response = await axios.get(
    `${API_URL}/forecast`
  );

  return response.data;
};
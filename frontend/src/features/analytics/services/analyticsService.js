import axios from "axios";

const API_URL =
  "http://localhost:5000/api/analytics";

export const getAnalytics = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getGrowthData = async () => {
  const response = await axios.get(
    `${API_URL}/growth`
  );
  return response.data;
};

export const getSavingsData = async () => {
  const response = await axios.get(
    `${API_URL}/savings`
  );
  return response.data;
};

export const getSpendingHeatmap = async () => {
  const response = await axios.get(
    `${API_URL}/heatmap`
  );
  return response.data;
};
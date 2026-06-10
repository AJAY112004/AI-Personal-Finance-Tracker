import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const loginUser = async (data) => {
  const response = await API.post("/login", data);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await API.post("/register", data);
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await API.post("/forgot-password", {
    email,
  });

  return response.data;
};
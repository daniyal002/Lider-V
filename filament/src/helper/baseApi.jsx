import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

// Кастомный хук для управления токеном
export const useAuthToken = () => {
  const [token, setToken] = useState(Cookies.get("authToken") || "");

  const setAuthToken = (newToken) => {
    Cookies.set("authToken", newToken);
    setToken(newToken);
  };

  const getAuthToken = () => token;

  const deleteAuthToken = () => Cookies.remove("authToken");

  return { setAuthToken, getAuthToken, deleteAuthToken, setToken };
};

export const baseApi = () => {
  // Создаем экземпляр хука
  const { getAuthToken } = useAuthToken();

  return axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });
};

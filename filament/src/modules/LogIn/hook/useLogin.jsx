import { useMutation } from "@tanstack/react-query";
import { baseApi, useAuthToken } from "../../../helper/baseApi";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setAuthToken } = useAuthToken();
  const api = baseApi();

  const { mutate, error,isSuccess } = useMutation({
    mutationFn: async (body) =>
      api.post("AccountAPI/Login", body).then((response) => {
        return response.data;
      }),
    onSuccess: (data) => {
      // Вызывается после успешной мутации (успешного входа)
      if (data && data.result) {
        setAuthToken(data.result); // Сохраняем токен
        navigate("/");
        // Устанавливаем токен после успешного входа
      }
    },
  });

  return { mutate, error,isSuccess };
};

import { useMutation } from "@tanstack/react-query";
import { axiosClassic } from "../../../helper/baseApi";
import { useNavigate } from "react-router-dom";
import { saveAccessToken } from "../../../helper/auth-token.service";

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate, error,isSuccess } = useMutation({
    mutationFn: async (body) =>
      axiosClassic.post("AccountAPI/Login", body).then((response) => {
        if(response.data.result){
          saveAccessToken(response.data.result)
      }
        return response.data;
      }),
    onSuccess: () => {
      // Вызывается после успешной мутации (успешного входа)
        navigate("/");
    },
  });

  return { mutate, error,isSuccess };
};

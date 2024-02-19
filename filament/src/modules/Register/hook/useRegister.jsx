import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { baseApi } from "../../../helper/baseApi";

export const useRegister = () => {
  const api = baseApi();
  const navigate = useNavigate();
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      api.post("AccountAPI/Register", body).then((response) => response.data),
    onSuccess: () => {
      navigate("/login");
    },
  });

  return { mutate, error };
};

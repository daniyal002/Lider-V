import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosClassic } from "../../../helper/baseApi";

export const useRegister = () => {
  const navigate = useNavigate();
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      axiosClassic.post("AccountAPI/Register", body).then((response) => response.data),
    onSuccess: () => {
      navigate("/login");
    },
  });

  return { mutate, error };
};

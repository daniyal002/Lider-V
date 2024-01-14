import { useMutation } from "@tanstack/react-query";
import { RegisterAPI } from "../service/Register.service";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();
  const { mutate, error } = useMutation({
    mutationFn: (body) => RegisterAPI(body),
    onSuccess: () => {
      navigate("/login");
    },
  });
  console.log(error);

  return { mutate, error };
};

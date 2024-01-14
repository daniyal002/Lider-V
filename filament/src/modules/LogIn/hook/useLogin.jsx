import { useMutation } from "@tanstack/react-query";
import { LoginAPI } from "../service/Login.service";

export const useLogin = () => {
  const { mutate, error } = useMutation({
    mutationFn: (body) => LoginAPI(body),
  });

  return { mutate, error };
};

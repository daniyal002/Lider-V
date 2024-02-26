import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useResetPassword = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      api.post("AccountAPI/ResetPassword", body).then((response) => response.data),
  });

  return { mutate, error };
};

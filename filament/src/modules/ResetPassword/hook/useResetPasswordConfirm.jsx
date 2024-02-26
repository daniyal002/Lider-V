import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useResetPasswordConfirm = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      api
        .post("AccountAPI/ResetPasswordConfirm", body)
        .then((response) => response.data),
  });

  return { mutate, error };
};

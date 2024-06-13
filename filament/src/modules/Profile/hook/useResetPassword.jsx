import { useMutation } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useResetPassword = (handleOpenModalBasic) => {
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      axiosWidthAuth
        .post("AccountAPI/ResetPassword", body)
        .then((response) => response.data),
    onSuccess: () => {
      handleOpenModalBasic();
    },
  });

  return { mutate, error };
};

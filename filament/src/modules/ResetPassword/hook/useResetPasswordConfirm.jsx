import { useMutation } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";
import { useNavigate } from "react-router-dom";

export const useResetPasswordConfirm = (handleOpenModalBasic) => {
  const navigate = useNavigate();
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      axiosWidthAuth
        .post("AccountAPI/ResetPasswordConfirm", body)
        .then((response) => response.data),
    onSuccess: () => {
      navigate("/profile");
      handleOpenModalBasic();
    },
  });

  return { mutate, error };
};

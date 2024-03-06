import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";
import { useNavigate } from "react-router-dom";

export const useResetPasswordConfirm = (handleOpenModalBasic) => {
  const navigate = useNavigate();
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      api
        .post("AccountAPI/ResetPasswordConfirm", body)
        .then((response) => response.data),
    onSuccess: () => {
      handleOpenModalBasic();
      navigate("/profile");
    },
  });

  return { mutate, error };
};

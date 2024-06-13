import { useMutation } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";
import { useNavigate } from "react-router-dom";

export const useConfirmEmail = (handleOpenModalBasic) => {
  const navigate = useNavigate();
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      axiosWidthAuth
        .get(
          `AccountAPI/ConfirmEmailChanged?email=${body.email}&code=${body.code}`
        )
        .then((response) => response.data),
    onSuccess: () => {
      navigate("/profile");
      handleOpenModalBasic();
    },
  });

  return { mutate, error };
};

import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";
import { useNavigate } from "react-router-dom";

export const useConfirmEmail = (handleOpenModalBasic) => {
  const navigate = useNavigate();
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      api
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

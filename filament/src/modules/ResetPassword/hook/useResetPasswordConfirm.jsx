import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from "react-router-dom";

export const useResetPasswordConfirm = () => {
  const navigate = useNavigate();
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      api
        .post("AccountAPI/ResetPasswordConfirm", body)
        .then((response) => response.data),
    onSuccess: () => {
      Swal.fire({
        title: "Ваш пароль успешно сброшен",
        icon: "success",
        confirmButtonText: "ОК",
      });
      navigate("/profile");
    },
  });

  return { mutate, error };
};

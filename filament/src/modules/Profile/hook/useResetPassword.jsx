import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const useResetPassword = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: (body) =>
      api
        .post("AccountAPI/ResetPassword", body)
        .then((response) => response.data),
    onSuccess: () => {
      Swal.fire({
        title: "На вашу почту отправленно сообщение для сброса пароля",
        icon: "success",
        confirmButtonText: "ОК",
      });
    },
  });

  return { mutate, error };
};

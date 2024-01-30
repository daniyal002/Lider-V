import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useAddProductCart = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api
        .post(`CartAPI`, body)
        .then((response) => response.data),
  });
  return { mutate, error };
};

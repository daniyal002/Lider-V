import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useDeleteProductCart = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api
        .delete(`CartAPI?cartItemId=${body}`)
        .then((response) => response.data),
  });
  return { mutate, error };
};

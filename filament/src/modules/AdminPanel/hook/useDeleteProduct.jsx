import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useDeleteProduct = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api.delete(`ProductAPI?id=${body}`).then((response) => response.data),
  });
  return { mutate, error };
};

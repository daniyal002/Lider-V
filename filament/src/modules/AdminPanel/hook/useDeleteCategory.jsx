import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useDeleteCategory = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api.delete(`CategoryAPI/${body}`).then((response) => response.data),
  });
  return { mutate, error };
};

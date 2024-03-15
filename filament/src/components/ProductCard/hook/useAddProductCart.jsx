import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useAddProductCart = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetProductCart");
  };
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api.post(`CartAPI`, body).then((response) => response.data),
    onSuccess: () => {
      refreshData();
    },
  });
  return { mutate, error };
};

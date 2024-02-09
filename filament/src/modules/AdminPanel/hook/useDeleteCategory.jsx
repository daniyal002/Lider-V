import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetCategories");
  };
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api.delete(`CategoryAPI/${body}`).then((response) => response.data),
    onSuccess: () => {
      refreshData();
    },
  });
  return { mutate, error };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useProductDeleteFavoriteToggle = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetProductFavorite");
  };
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api
        .post(`ProductAPI/delete-favorite/${body}`)
        .then((response) => response.data),
    onSuccess: () => {
      refreshData();
    },
  });
  return { mutate, error };
};

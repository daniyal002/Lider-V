import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useProductDeleteFavoriteToggle = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetProductFavorite");
  };
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      axiosWidthAuth
        .post(`ProductAPI/delete-favorite/${body}`)
        .then((response) => response.data),
    onSuccess: () => {
      refreshData();
    },
  });
  return { mutate, error };
};

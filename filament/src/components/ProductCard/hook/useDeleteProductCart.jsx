import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useDeleteProductCart = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetProductCart");
  };

  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api
        .delete(`CartAPI?cartItemId=${body}`)
        .then((response) => response.data),
    onSuccess: () => {
      refreshData();
    },
  });
  return { mutate, error };
};

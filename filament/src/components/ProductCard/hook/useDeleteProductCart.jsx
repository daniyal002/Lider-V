import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useDeleteProductCart = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetProductCart");
  };

  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      axiosWidthAuth
        .delete(`CartAPI?cartItemId=${body}`)
        .then((response) => response.data),
    onSuccess: () => {
      refreshData();
    },
  });
  return { mutate, error };
};

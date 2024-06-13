import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetCategories");
  };
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      axiosWidthAuth.delete(`CategoryAPI/${body}`).then((response) => response.data),
    onSuccess: () => {
      refreshData();
    },
  });
  return { mutate, error };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useAddProductCart = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetProductCart");
  };
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      axiosWidthAuth.post(`CartAPI`, body).then((response) => response.data),
    onSuccess: () => {
      refreshData();
    },
  });
  return { mutate, error };
};

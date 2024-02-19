import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useDeleteProduct = () => {
  // const queryClient = useQueryClient();
  // const refreshData = () => {
  //   queryClient.invalidateQueries("GetProduct");
  // }; 
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api.delete(`ProductAPI?id=${body}`).then((response) => response.data),
    // onSuccess: () => {
    //   refreshData();
    // },
  });
  return { mutate, error };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useDeleteProduct = () => {
  // const queryClient = useQueryClient();
  // const refreshData = () => {
  //   queryClient.invalidateQueries("GetProduct");
  // }; 
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      axiosWidthAuth.delete(`ProductAPI?id=${body}`).then((response) => response.data),
    // onSuccess: () => {
    //   refreshData();
    // },
  });
  return { mutate, error };
};

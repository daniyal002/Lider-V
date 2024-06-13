import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useChangeCategory = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetCategories");
  };
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      return axiosWidthAuth
        .put(
          `CategoryAPI/ChangeCategoryName?categoryId=${body.id}&categoryName=${body.categoryName}`
        )
        .then((response) => response.data);
    },
    onSuccess: () => {
      refreshData();
    },
  });
  return { mutate, error };
};

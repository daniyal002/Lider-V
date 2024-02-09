import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useChangeCategory = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetCategories");
  };
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      return api
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

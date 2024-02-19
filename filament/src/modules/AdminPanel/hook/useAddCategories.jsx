import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useAddCategories = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetCategories");
  };
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      const formData = new FormData();
      formData.append("categoryName", body.categoryName);
      formData.append("categoryImage", body.categoryImage);

      return api
        .post("CategoryAPI/AddCategory", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => response.data);
    },
    onSuccess: () => {
      refreshData();
    },
  });
  return { mutate, error };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useAddCategories = () => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("GetCategories");
  };
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      const formData = new FormData();
      formData.append("categoryName", body.categoryName);
      formData.append("categoryImage", body.categoryImage);

      return axiosWidthAuth
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

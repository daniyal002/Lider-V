import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useAddProduct = () => {
  const formData = new FormData();

  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      // formData.append("productName", body.productName);
      // formData.append("productPrice", Number(body.productPrice));
      // formData.append("productDescription", body.productDescription);
      // formData.append("productSize", body.productSize);
      // formData.append("productQuantity", Number(body.productQuantity));
      // formData.append("categoryId", body.categoryId);
      // formData.append("productImage", body.productImage);
      return api
        .post("ProductAPI", body, {
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        })
        .then((response) => response.data);
    },
  });
  return { mutate, error };
};

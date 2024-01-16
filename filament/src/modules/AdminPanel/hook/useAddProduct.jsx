import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useAddProduct = () => {
  const formData = new FormData();

  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      console.log(body);
      formData.append("productName", body.ProductName);
      formData.append("productPrice", body.ProductPrice);
      formData.append("productDescription", body.ProductDescription);
      formData.append("productWeight", body.ProductWeight);
      formData.append("productQuantity", body.ProductQuantity);
      formData.append("isFavorite", body.isFavorite);
      formData.append("categoryId", body.categoryId);

      formData.append("productImage", body.productImage);
      return api.post("ProductAPI", formData).then((response) => response.data);
    },
  });
  return { mutate, error };
};

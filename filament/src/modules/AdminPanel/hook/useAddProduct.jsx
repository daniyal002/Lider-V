import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useAddProduct = () => {
  const formData = new FormData();

  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      formData.append("ProductName", body.ProductName);
      formData.append("ProductPrice", Number(body.ProductPrice));
      formData.append("productDescription", body.ProductDescription);
      formData.append("productSize", body.ProductSize);
      formData.append("productQuantity", Number(body.ProductQuantity));
      formData.append("categoryId", body.categoryId);

      formData.append("productImage", body.productImage);
      return api.post("ProductAPI", formData).then((response) => response.data);
    },
  });
  return { mutate, error };
};

import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useAddProduct = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      const formData = new FormData();
      // Добавление данных в объект formData
      formData.append("categoryId", body.categoryId);
      formData.append("productDescription", body.productDescription);
      formData.append("productName", body.productName);
      formData.append("productPrice", body.productPrice);
      formData.append("productQuantity", body.productQuantity);
      formData.append("productSize", body.productSize);
      formData.append("productImage", body.productImage); // Здесь предполагается, что uploadedFile уже определен
      // Отправка formData на сервер и получение ответа
      return api
        .post("ProductAPI", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => response.data);
    },
  });
  return { mutate, error };
};

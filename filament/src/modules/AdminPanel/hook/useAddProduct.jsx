import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useAddProduct = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      return api.post("ProductAPI", body, {}).then((response) => response.data);
    },
  });
  return { mutate, error };
};

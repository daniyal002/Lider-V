import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useChangeProduct = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      return api.put("ProductAPI", body).then((response) => response.data);
    },
  });
  return { mutate, error };
};

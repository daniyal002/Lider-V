import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useAddCategories = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api.post("CategoryAPI", body).then((response) => response.data),
  });
  return { mutate, error };
};

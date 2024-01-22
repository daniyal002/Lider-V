import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useProductFavoriteToggle = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api
        .post(`ProductAPI/toggle-favorite/${body}`)
        .then((response) => response.data),
  });
  return { mutate, error };
};

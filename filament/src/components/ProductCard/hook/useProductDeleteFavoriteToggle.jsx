import { useMutation } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useProductDeleteFavoriteToggle = () => {
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) =>
      api
        .post(`ProductAPI/delete-favorite/${body}`)
        .then((response) => response.data),
  });
  return { mutate, error };
};

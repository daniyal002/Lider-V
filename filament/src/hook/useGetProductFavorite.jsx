import { useQuery } from "@tanstack/react-query";
import { baseApi } from "../helper/baseApi";

export const useGetProductFavorite = () => {
  const api = baseApi();
  const { data, error } = useQuery({
    queryKey: ["GetProductFavorite"],
    queryFn: async () =>
      api
        .get("ProductAPI/favorites")
        .then((response) => response.data.result.$values),
  });
  return { data, error };
};

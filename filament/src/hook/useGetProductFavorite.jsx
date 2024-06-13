import { useQuery } from "@tanstack/react-query";
import { axiosWidthAuth } from "../helper/baseApi";

export const useGetProductFavorite = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["GetProductFavorite"],
    queryFn: async () =>
      axiosWidthAuth
        .get("ProductAPI/favorites")
        .then((response) => response.data.result.$values),
  });
  return { data, error, isLoading };
};

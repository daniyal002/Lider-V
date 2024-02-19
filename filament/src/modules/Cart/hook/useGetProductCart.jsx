import { useQuery } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useGetProductCart = () => {
  const api = baseApi();
  const { data, error, isLoading } = useQuery({
    queryKey: ["GetProductCart"],
    queryFn: async () =>
      api
        .get("CartAPI")
        .then((response) => response.data.result.cartItems.$values),
  });
  return { data, error, isLoading };
};

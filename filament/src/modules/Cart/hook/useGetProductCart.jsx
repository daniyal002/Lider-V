import { useQuery } from "@tanstack/react-query";
import {  axiosWidthAuth } from "../../../helper/baseApi";

export const useGetProductCart = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["GetProductCart"],
    queryFn: async () =>
      axiosWidthAuth
        .get("CartAPI")
        .then((response) => response.data.result.cartItems.$values),
  });
  return { data, error, isLoading };
};

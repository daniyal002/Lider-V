import { useQuery } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useGetProduct = () => {
  const api = baseApi();
  const { data, error,isLoading } = useQuery({
    queryKey: ["GetProduct"],
    queryFn: async () =>
      api.get("ProductAPI").then((response) => response.data.result.$values),
  });
  return { data, error, isLoading };
};

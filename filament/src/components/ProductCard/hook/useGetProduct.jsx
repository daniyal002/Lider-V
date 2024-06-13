import { useQuery } from "@tanstack/react-query";
import { axiosClassic } from "../../../helper/baseApi";

export const useGetProduct = () => {
  const { data, error,isLoading } = useQuery({
    queryKey: ["GetProduct"],
    queryFn: async () =>
      axiosClassic.get("ProductAPI").then((response) => response.data.result.$values),
  });
  return { data, error, isLoading };
};

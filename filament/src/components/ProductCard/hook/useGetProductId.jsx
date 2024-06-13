import { useQuery } from "@tanstack/react-query";
import { axiosClassic } from "../../../helper/baseApi";

export const useGetProductId = (id) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["GetProduct", id],
    queryFn: async () =>
      axiosClassic.get(`ProductAPI/${id}`).then((response) => response.data.result),
  });
  return { data, error, isLoading };
};

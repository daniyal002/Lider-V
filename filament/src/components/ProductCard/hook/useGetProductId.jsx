import { useQuery } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useGetProductId = (id) => {
  const api = baseApi();
  const { data, error, isLoading } = useQuery({
    queryKey: ["GetProduct", id],
    queryFn: async () =>
      api.get(`ProductAPI/${id}`).then((response) => response.data.result),
  });
  return { data, error, isLoading };
};

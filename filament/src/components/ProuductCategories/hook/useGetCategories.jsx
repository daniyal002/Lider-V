import { useQuery } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useGetCategories = () => {
  const api = baseApi();
  const { data, error } = useQuery({
    queryKey: ["GetCategories"],
    queryFn: async () =>
      api.get("CategoryAPI").then((response) => response.data.result.$values),
  });
  return { data, error };
};

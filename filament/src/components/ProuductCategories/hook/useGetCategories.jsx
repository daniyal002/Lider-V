import { useQuery } from "@tanstack/react-query";
import { axiosClassic } from "../../../helper/baseApi";

export const useGetCategories = () => {
  const { data, error } = useQuery({
    queryKey: ["GetCategories"],
    queryFn: async () =>
      axiosClassic.get("CategoryAPI").then((response) => response.data.result.$values),
  });
  return { data, error };
};

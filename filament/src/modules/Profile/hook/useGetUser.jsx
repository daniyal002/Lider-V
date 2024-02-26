import { useQuery } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useGetUser = () => {
  const api = baseApi();
  const { data, error, isLoading } = useQuery({
    queryKey: ["useGetUser"],
    queryFn: async () =>
      api
        .get("AccountAPI/GetUser")
        .then((response) => response.data.result),
  });
  return { data, error, isLoading };
};

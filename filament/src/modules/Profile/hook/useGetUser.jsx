import { useQuery } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useGetUser = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["useGetUser"],
    queryFn: async () =>
      axiosWidthAuth
        .get("AccountAPI/GetUser")
        .then((response) => response.data.result),
  });
  return { data, error, isLoading };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useChangeLogin = (handleClose) => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("useGetUser");
  };
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      return api
        .post(`AccountAPI/ChangeUserLogin?newUserLogin=${body.newUserLogin}`)
        .then((response) => response.data);
    },
    onSuccess: () => {
      refreshData();
      handleClose();
    },
  });
  return { mutate, error };
};

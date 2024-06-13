import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useChangeLogin = (handleClose) => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("useGetUser");
  };
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      return axiosWidthAuth.post(`AccountAPI/ChangeUserLogin?newUserLogin=${body.newUserLogin}`)
        .then((response) => response.data);
    },
    onSuccess: () => {
      refreshData();
      handleClose();
    },
  });
  return { mutate, error };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useChangeEmail = (handleClose) => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("useGetUser");
  };
  const { mutate, error, isSuccess } = useMutation({
    mutationFn: async (body) => {
      return axiosWidthAuth
        .post(`AccountAPI/ChangeUserEmail?newEmail=${body.newEmail}`)
        .then((response) => response.data);
    },
    onSuccess: () => {
      refreshData();
      setTimeout(() => {
        handleClose();
      }, 3000);
    },
  });
  return { mutate, error, isSuccess };
};

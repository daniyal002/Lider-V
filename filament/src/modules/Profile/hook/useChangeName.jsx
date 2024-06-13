import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosWidthAuth } from "../../../helper/baseApi";

export const useChangeName = (handleClose) => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("useGetUser");
  };
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      return axiosWidthAuth
        .post(
          `AccountAPI/ChangeUserName?newFirstName=${body.newFirstName}&newLastName=${body.newLastName}`
        )
        .then((response) => response.data);
    },
    onSuccess: () => {
      refreshData();
      handleClose();
    },
  });
  return { mutate, error };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApi } from "../../../helper/baseApi";

export const useChangeName = (handleClose) => {
  const queryClient = useQueryClient();
  const refreshData = () => {
    queryClient.invalidateQueries("useGetUser");
  };
  const api = baseApi();
  const { mutate, error } = useMutation({
    mutationFn: async (body) => {
      return api
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

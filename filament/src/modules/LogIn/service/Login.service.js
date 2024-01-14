import { baseApi } from "../../../helper/baseApi";

export const LoginAPI = async (body) => {
  return baseApi.post("AccountAPI/Login", body).then((response) => {
    response.data;
  });
};

import { baseApi } from "../../../helper/baseApi";

export const RegisterAPI = async (body) => {
  return baseApi
    .post("AccountAPI/Register", body)
    .then((response) => response.data);
};

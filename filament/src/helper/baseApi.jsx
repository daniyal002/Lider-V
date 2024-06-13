import axios from "axios";
import { getAccessToken } from "./auth-token.service";

const options = {
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
      'Content-Type': 'application/json',
  },
  // withCredentials: true
};

const axiosClassic = axios.create(options);
const axiosWidthAuth = axios.create(options);

axiosWidthAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken();
  if (config?.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosWidthAuth.interceptors.response.use(
  response => response,
  async error => {
      const originalRequest = error.config;
      if (error?.response?.status === 401  && error.config && !error.config._isRetry) {
          originalRequest._isRetry = true;
            return window.location.replace("/login");

          // const refreshToken = getRefreshToken();

          // if (!refreshToken) {
          //     removeAccessTokenFromStorage();
          //     removeRefreshTokenFromStorage();
          //     return window.location.replace("/login");
          // }

          // try {
          //     await authService.refresh();
          //     return axiosWidthAuth(originalRequest);
          // } catch (refreshError) {
          //     console.error("Error during token refresh:", refreshError);
          //     removeAccessTokenFromStorage();
          //     removeRefreshTokenFromStorage();
          //     return window.location.replace("/login");
          // }
      }

      throw error;
  }
);

export { axiosClassic, axiosWidthAuth };

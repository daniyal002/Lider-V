// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { useAuthToken } from "../../helper/baseApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { getAuthToken, deleteAuthToken } = useAuthToken();
  const [isLoggedIn, setIsLoggedIn] = useState(!!getAuthToken());

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    deleteAuthToken();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

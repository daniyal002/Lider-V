// // AuthContext.js
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useAuthToken } from "../../helper/baseApi";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const { getAuthToken, deleteAuthToken, setToken } = useAuthToken();
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Изначально пользователь не авторизован

//   useEffect(() => {
//     // Проверяем токен при монтировании компонента
//     if (getAuthToken() !== "") {
//       setIsLoggedIn(true);
//     }
//   }, [getAuthToken]); // Зависимость от функции getAuthToken

//   const login = () => {
//     // Функция login больше не проверяет токен, так как это делается в useEffect
//     // Она просто устанавливает флаг isLoggedIn в true
//     setIsLoggedIn(true);
//     setToken(getAuthToken());
//   };

//   const logout = () => {
//     deleteAuthToken();
//     setIsLoggedIn(false);
//     setToken("");
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

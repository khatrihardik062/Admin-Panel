import React, { createContext, useState } from "react";

export const MainContext = createContext();

export default function ContextProvider({ children }) {
  // Ye raha apka default email aur password
  const [defaultEmail] = useState("hardik@gmail.com");
  const [defaultPassword] = useState("1234");
  const [isLogin, setIsLogin] = useState(() => {
    return Number(localStorage.getItem("isLogin")) || 0;
  });

  return (
    <MainContext.Provider
      value={{
        defaultEmail,
        defaultPassword,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
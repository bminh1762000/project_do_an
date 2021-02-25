import React, { createContext, useState } from "react";

export const UserContext = createContext();

const getUserFromLocalStorage = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { userId: null, token: null };
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const userLogout = () => {
    localStorage.removeItem("user");
    setUser({ userId: null, token: null });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

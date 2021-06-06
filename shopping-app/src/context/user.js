import React, { createContext, useState, useContext } from "react";

import { CartContext } from "./cart";

export const UserContext = createContext();

const getUserFromLocalStorage = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { userId: null, token: null, role: null };
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const { clearCart } = useContext(CartContext);

  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const userLogout = () => {
    localStorage.removeItem("user");
    clearCart();
    setUser({ userId: null, token: null, role: null });
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

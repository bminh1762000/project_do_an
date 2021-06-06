import React, { useState, useEffect, createContext } from "react";

import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  getTotalPrice,
  getTotalItem,
} from "./product.utils";

const getCartFromLocalStorage = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => setCart(addItemToCart(cart, item));
  const removeFromCart = (item) => setCart(removeItemFromCart(cart, item));
  const deleteFromCart = (item) => setCart(deleteItemFromCart(cart, item));
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    setTotalItem(getTotalItem(cart));
    setTotalPrice(getTotalPrice(cart));
    localStorage.setItem("cart", JSON.stringify(cart));
    return () => {};
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItem,
        totalPrice,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

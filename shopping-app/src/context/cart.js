import React, { useState, useEffect, createContext } from "react";

import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  getTotalPrice,
  getTotalItem,
} from "./product.utils";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => setCart(addItemToCart(cart, item));
  const removeFromCart = (item) => setCart(removeItemFromCart(cart, item));
  const deleteFromCart = (item) => setCart(deleteItemFromCart(cart, item));

  useEffect(() => {
    setTotalItem(getTotalItem(cart));
    setTotalPrice(getTotalPrice(cart));
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

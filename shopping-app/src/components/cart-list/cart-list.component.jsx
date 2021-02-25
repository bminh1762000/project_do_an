import React, { useContext } from "react";

import { CartContext } from "../../context/cart";
import CartItem from "../cart-item/cart-item.component";
import { CartListContainer } from "./cart-list.styles";

const CartList = () => {
  const { cart } = useContext(CartContext);
  return (
    <CartListContainer>
      {cart.map((cartItem) => (
        <CartItem key={cartItem._id} item={cartItem} />
      ))}
    </CartListContainer>
  );
};

export default CartList;

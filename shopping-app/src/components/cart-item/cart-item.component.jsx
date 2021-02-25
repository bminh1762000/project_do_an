import React, { useContext } from "react";

import {
  CartItemContainer,
  CartAction,
  ButtonCart,
  CartImage,
} from "./cart-item.styles";
import { CartContext } from "../../context/cart.js";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
  return (
    <CartItemContainer>
      <CartImage imageUrl={item.imageUrl} />
      <div className="cart-description">
        <h2>{item.title}</h2>
        <h4>{item.price}$</h4>
        <ButtonCart onClick={() => deleteFromCart(item)}>Delete</ButtonCart>
      </div>
      <CartAction>
        <ButtonCart onClick={() => addToCart(item)}>&lsaquo;</ButtonCart>
        <p>{item.quantity}</p>
        <ButtonCart onClick={() => removeFromCart(item)}>&rsaquo;</ButtonCart>
      </CartAction>
    </CartItemContainer>
  );
};

export default CartItem;

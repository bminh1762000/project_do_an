import React from "react";

import {
  CartIconContainer,
  CartIconLogo,
  TotalItemCart,
} from "./cart-icon.styles";

const CartIcon = ({ totalItem }) => {
  return (
    <CartIconContainer>
      <CartIconLogo />
      <TotalItemCart>{totalItem}</TotalItemCart>
    </CartIconContainer>
  );
};

export default CartIcon;

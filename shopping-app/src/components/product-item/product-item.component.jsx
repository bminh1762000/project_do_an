import React from "react";
import {useHistory} from 'react-router-dom'

import { CartItemContainer, CartImage, CartDetail } from "./product-item.styles";

const ProductItem = ({ product: { title, imageUrl, price, _id }}) => {
  const history = useHistory();
  return (
    <CartItemContainer onClick={() => history.push(`products/${_id}`)}>
      <CartImage imageUrl={imageUrl} />
      <CartDetail>
        <p className="title">{title}</p>
        <p className="price">{price}$</p>
      </CartDetail>
    </CartItemContainer>
  );
};

export default ProductItem;

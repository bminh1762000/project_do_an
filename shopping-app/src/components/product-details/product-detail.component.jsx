import React, { useContext } from "react";

import Button from "../button/button.component";

import {
  ProductDetailContainer,
  DescriptionContainer,
} from "./product-detail.styles";
import { ProductContext } from "../../context/product";
import { CartContext } from "../../context/cart";

const ProductDetail = ({ match }) => {
  const { products: productData } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const productId = match.params.productId;
  const product = productData.find(
    (p) => p._id.toString() === productId.toString()
  );
  return product ? (
    <ProductDetailContainer>
      <img src={product.imageUrl} alt="Image Products" />
      <DescriptionContainer>
        <h1 className="title">{product.title}</h1>
        <p className="price">{product.price} $</p>
        <p className="description">
          Tofu hoodie pop-up try-hard vice cornhole gluten-free keytar mlkshk
          8-bit small batch four loko letterpress. Yr cornhole hoodie tote bag
          wayfarers mustache mumblecore crucifix hell of single-origin coffee
          pinterest. Readymade la croix activated charcoal cray edison bulb.
          Woke marfa helvetica hashtag green juice keffiyeh street art locavore
          four loko brunch flexitarian. Wayfarers fanny pack pork belly
          semiotics VHS affogato mixtape tumblr glossier jianbing freegan
          kinfolk pug. Intelligentsia pug 8-bit microdosing salvia locavore 90's
          umami gastropub iceland church-key marfa readymade 3 wolf moon
          keffiyeh. Tofu seitan mlkshk, try-hard cray hella PBR&B kale chips
          bushwick umami salvia knausgaard four loko pork belly semiotics.
        </p>
        <Button onClick={() => addToCart(product)}>Add to cart</Button>
      </DescriptionContainer>
    </ProductDetailContainer>
  ) : (
    <h2>Product do not existing.</h2>
  );
};

export default ProductDetail;

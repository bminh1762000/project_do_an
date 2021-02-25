import React, { useContext } from "react";

import { paginate } from "../../context/product.utils";
import ProductItem from "../product-item/product-item.component";
import Pagination from "../pagination/pagination.component";
import Filter from "../filter/filter.component";

import { ProductListContainer, ListContainer } from "./product-list.styles";
import { ProductContext } from "../../context/product";

const ProductList = () => {
  const { productFilter, loading, page } = useContext(ProductContext);
  const products = paginate(productFilter, page);
  if (loading) {
    return <h1>Loading ....</h1>;
  }
  return (
    <ProductListContainer>
      <Filter />
      <ListContainer>
        {products
          ? products.map((product) => {
              return <ProductItem key={product._id} product={product} />;
            })
          : null}
      </ListContainer>
      <Pagination />
    </ProductListContainer>
  );
};

export default ProductList;

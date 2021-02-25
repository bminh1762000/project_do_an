import React, { useContext } from "react";

import { ProductContext } from "../../context/product";

import { SectionContainer, FilterForm, PriceGroup } from "./filter.styles";

const Filter = () => {
  const {
    filters: { price, category, shipping, sort },
    changeFilter,
  } = useContext(ProductContext);
  return (
    <SectionContainer>
      <FilterForm>
        <div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              name="category"
              id="category"
              onChange={changeFilter}
              value={category}
            >
              <option value="all">All</option>
              <option value="men">Mens</option>
              <option value="women">Women</option>
              <option value="jacket">Jackets</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              name="sort"
              id="sort"
              onChange={changeFilter}
              value={sort}
            >
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={changeFilter}
            />
            <label htmlFor="shipping">Free ship</label>
          </div>
        </div>
        <PriceGroup>
          <p>Price</p>
          <label>
            <input
              type="radio"
              name="price"
              id="all"
              value="all"
              checked={price === "all"}
              onChange={changeFilter}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={changeFilter}
            />
            $0 - $20
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="20"
              checked={price === 20}
              onChange={changeFilter}
            />
            $20 - $40
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="40"
              checked={price === 40}
              onChange={changeFilter}
            />
            Over $40
          </label>
        </PriceGroup>
      </FilterForm>
    </SectionContainer>
  );
};

export default Filter;

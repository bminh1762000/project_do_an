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
            <label htmlFor="category">Hãng</label>
            <select
              className="form-control"
              name="category"
              id="category"
              onChange={changeFilter}
              value={category}
            >
              <option value="all">All</option>
              <option value="hp">HP</option>
              <option value="lenovo">Lenovo</option>
              <option value="dell">Dell</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Sắp xếp</label>
            <select
              className="form-control"
              name="sort"
              id="sort"
              onChange={changeFilter}
              value={sort}
            >
              <option value="asc">Tăng dần</option>
              <option value="desc">Giảm dần</option>
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
            10000000đ - 15000000đ
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="10000000"
              checked={price === 10000000}
              onChange={changeFilter}
            />
            15000000đ - 20000000đ
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="20000000"
              checked={price === 20000000}
              onChange={changeFilter}
            />
            20000000đ trở lên
          </label>
        </PriceGroup>
      </FilterForm>
    </SectionContainer>
  );
};

export default Filter;

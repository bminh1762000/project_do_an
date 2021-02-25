import React, { useContext } from "react";

import { PaginationContainer } from "./pagination.styles";

import { ProductContext } from "../../context/product";

const Pagination = () => {
  const { changePage, page, lastPage } = useContext(ProductContext);

  const getPaginationGroup = () => {
    let start = Math.floor((page - 1) / 4) * 4;
    return new Array(4)
      .fill()
      .map((_, idx) => start + idx + 1)
      .filter((i) => i <= lastPage);
  };
  return (
    <PaginationContainer>
      {
        <button
          onClick={() => changePage(page - 1)}
          className={["prev", page === 1 ? "disabled" : ""].join(" ")}
        >
          Prev
        </button>
      }
      {getPaginationGroup().map((value, idx) => (
        <button
          key={idx}
          className={["paginationItem", page === value ? "active" : null].join(
            " "
          )}
          onClick={(event) => changePage(Number(event.target.innerText))}
        >
          {value}
        </button>
      ))}
      {
        <button
          onClick={() => changePage(page + 1)}
          className={["next", page === lastPage ? "disabled" : ""].join(" ")}
        >
          Next
        </button>
      }
    </PaginationContainer>
  );
};

export default Pagination;

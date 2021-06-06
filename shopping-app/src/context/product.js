import React, {
  createContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productFilter, setProductFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [lastPage, setLastPage] = useState();
  const [page, setPage] = useState(1);
  const [filters, setFilter] = useState({
    category: "all",
    price: "all",
    shipping: false,
    search: "",
    sort: "asc",
  });

  const changeFilter = (e) => {
    const { name, value, type } = e.target;
    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      filterValue = value === "all" ? value : parseInt(value);
    } else {
      filterValue = value;
    }

    setFilter({ ...filters, [name]: filterValue });
  };

  const changePage = (page) => {
    setPage(page);
  };

  useEffect(async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8000/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await response.json();
    setProducts(resData.products);
    setLoading(false);
    return () => {};
  }, []);

  useLayoutEffect(() => {
    let newProducts = [...products];
    const { category, price, shipping, search, sort } = filters;
    if (category !== "all") {
      newProducts = newProducts.filter((p) => p.category === category);
    }
    if (shipping !== false) {
      newProducts = newProducts.filter((p) => p.ship === shipping);
    }
    if (price !== "all") {
      newProducts = newProducts.filter((p) => {
        if (price === 0) {
          return p.price < 15000000 && p.price >= 10000000;
        } else if (price === 10000000) {
          return p.price < 10000000 && p.price >= 15000000;
        } else {
          return p.price >= 20000000;
        }
      });
    }
    if (search !== "") {
      newProducts = newProducts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sort === "asc") {
      newProducts = newProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "desc") {
      newProducts = newProducts.sort((a, b) => b.price - a.price);
    }
    setLastPage(Math.ceil(newProducts.length / 4));
    setPage(1);
    setProductFilter(newProducts);
  }, [filters, products]);

  return (
    <ProductContext.Provider
      value={{
        loading,
        page,
        products,
        lastPage,
        changePage,
        filters,
        changeFilter,
        productFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

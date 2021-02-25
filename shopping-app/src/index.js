import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProductProvider from "./context/product";
import CartProvider from "./context/cart";
import UserProvider from "./context/user";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

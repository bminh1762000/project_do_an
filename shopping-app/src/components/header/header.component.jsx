import React, { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/popcorn.svg";
import { withRouter } from "react-router-dom";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  SearchContainer,
} from "./header.styles";

import { ProductContext } from "../../context/product";
import { CartContext } from "../../context/cart";
import { UserContext } from "../../context/user";

import CartIcon from "../cart-icon/cart-icon.component";

const isActive = (history, path) => {
  return history.location.pathname === path
    ? { color: "#f1c40f" }
    : { color: "#2c3e50" };
};

const Header = ({ history }) => {
  const {
    filters: { search },
    changeFilter,
  } = useContext(ProductContext);
  const { totalItem } = useContext(CartContext);
  const { user, userLogout } = useContext(UserContext);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <>
          <OptionLink to="/" style={isActive(history, "/")}>
            Home
          </OptionLink>
          <OptionLink to="/about" style={isActive(history, "/about")}>
            About
          </OptionLink>
          <OptionLink to="/products" style={isActive(history, "/products")}>
            Products
          </OptionLink>
          {user.userId ? (
            <OptionLink as="div" onClick={() => userLogout()}>
              Log out
            </OptionLink>
          ) : (
            <OptionLink to="/login" style={isActive(history, "/login")}>
              Log in
            </OptionLink>
          )}
          <OptionLink to="/cart">
            <CartIcon totalItem={totalItem} />
          </OptionLink>
        </>
        <SearchContainer>
          <form>
            <input
              type="text"
              placeholder="Search"
              name="search"
              value={search}
              onChange={changeFilter}
            />
          </form>
        </SearchContainer>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default withRouter(Header);

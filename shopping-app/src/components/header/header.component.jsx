import React, { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/popcorn.svg";

import {
  HeaderContainer,
  LogoContainer,
  HamburgerContainer,
  OptionsContainer,
  OptionLink,
  SearchContainer,
} from "./header.styles";

import { ProductContext } from "../../context/product";
import { CartContext } from "../../context/cart";
import { UserContext } from "../../context/user";

const Header = () => {
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
      <HamburgerContainer>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerContainer>
      <OptionsContainer>
        <>
          <OptionLink to="/">Home</OptionLink>
          <OptionLink to="/about">About</OptionLink>
          <OptionLink to="/products">Products</OptionLink>
          {user.userId ? (
            <OptionLink as="div" onClick={() => userLogout()}>
              Log out
            </OptionLink>
          ) : (
            <OptionLink to="/login">Log in</OptionLink>
          )}
          <OptionLink to="/cart">Cart{totalItem}</OptionLink>
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

export default Header;

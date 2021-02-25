import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import AboutPage from "./pages/about/about.component";
import HomePage from "./pages/home/home.component";
import ProductPage from "./pages/product/product.component";
import CartPage from "./pages/cart/cart-page.component";
import LoginPage from "./pages/login/login.page";
import { UserContext } from "./context/user";

import "./App.css";

const App = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route
          exact
          path="/login"
          render={() => (user.userId ? <Redirect to="/products" /> : <LoginPage />)}
        />
      </Switch>
    </div>
  );
};

export default App;

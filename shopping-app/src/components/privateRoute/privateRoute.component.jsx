import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../../context/user";

const PrivateRoute = ({ children, ...otherProps }) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...otherProps}
      render={() => (user ? children : <Redirect to="/login" />)}
    >
      {children}
    </Route>
  );
};

export default PrivateRoute;

import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component, path, exact = false, redirect = null, }) => {

  const isAuth = localStorage.getItem("isAuth");
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const email = localStorage.getItem("email");
  if (username != null && email != null && password != null) {
    localStorage.setItem("isAuth", true);
  }

  return (
    <Route path={path} exact={exact}>
      {isAuth ? component : redirect ? redirect : <Redirect to="/login" />}
    </Route>
  );
};

export default ProtectedRoute;
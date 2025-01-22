import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated === "true" ? element : <Navigate to="/" />;
};

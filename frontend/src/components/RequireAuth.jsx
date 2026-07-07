import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { token } = useContext(ShopContext);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;

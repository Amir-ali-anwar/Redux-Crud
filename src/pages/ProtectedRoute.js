import React from "react";
import { Navigate } from "react-router-dom";
import {getUserFromLocalStorage} from '../utils/localStorage'
const user=getUserFromLocalStorage();
const ProtectedRoute = ({ children }) => {
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;

import { observer } from "mobx-react-lite";
import React from "react";
import { Navigate } from "react-router-dom";
import user from "../mobxStore/AuthStore";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = observer(({ children }) => {
  const { userInfo: isAuth } = user;

  if (!Boolean(isAuth)) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
});

export default AuthRoute;

import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const emailVerify = loggedIn.email;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        emailVerify ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

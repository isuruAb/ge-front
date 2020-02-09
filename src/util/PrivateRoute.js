import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTES } from "./routes";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
  let auth = useSelector(auth => auth);
  const { authenticated, token } = auth;
  return (
    <Route
      {...rest}
      render={props =>
        token && authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: ROUTES.index, state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

import React from "react";
import config from "../../config";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../../services/token-service";

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  const encryptedToken = window.sessionStorage.getItem(config.TOKEN_KEY);
  console.log(encryptedToken);
  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? (
          <Redirect to={`/:user_id/inventory`} />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}

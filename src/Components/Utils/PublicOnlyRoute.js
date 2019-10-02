import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../../services/token-service";

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  const token = TokenService.hasAuthToken() ? TokenService.getAuthToken() : "";
  const tokenDecoded = token ? TokenService.readJwtToken(token) : "";

  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? (
          <Redirect to={`/${tokenDecoded.id}/inventory`} />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}

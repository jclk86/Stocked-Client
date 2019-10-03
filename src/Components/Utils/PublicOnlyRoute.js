import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../../services/token-service";

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;

  // On logout, window.sessionsStorage is cleared. token variable checks for existence
  // of token, which is present upon submit button click for existing, authorized
  // user. tokenDecoded then decodes the JWT Payload and inserts it into the
  // <Redirect> and redirects user to appropriate component. If login fails,
  // user remains on login page.
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

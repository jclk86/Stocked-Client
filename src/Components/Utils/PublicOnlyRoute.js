import React from "react";
import config from "../../config";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../../services/token-service";
import jwtDecode from "jwt-decode";

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  const encryptedToken = window.sessionStorage.getItem(config.TOKEN_KEY);
  const tokenStringified = String(encryptedToken);
  // const tokenDecoded = TokenService.parseJwt(tokenStringified);
  // console.log(tokenDecoded);
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

import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import IdleService from "../../services/idle-service";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import AddItemPage from "../../routes/AddItemPage/AddItemPage";
import EditItemPage from "../../routes/EditItemPage/EditItemPage";
import InventoryListPage from "../../routes/InventoryListPage/InventoryListPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  // If auth token is passed, setTimeout and provide a new token.
  // Establishes detection of keyboard or mouse activity on the app.
  // If not activity, log out and clear session storage and force render()
  // on component.
  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }
  // Once components unmount, clear idle timeout.
  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}

          <Switch>
            <PublicOnlyRoute exact path={"/login"} component={LoginPage} />
            <PublicOnlyRoute
              exact
              path={"/register"}
              component={RegistrationPage}
            />
            <PrivateRoute
              exact
              path={"/:user_id/inventory"}
              component={InventoryListPage}
            />{" "}
            <PrivateRoute
              exact
              path={"/:user_id/tags/:tag_id"}
              component={InventoryListPage}
            />
            <PrivateRoute
              exact
              path={"/:user_id/inventory/add-item"}
              component={AddItemPage}
            />
            <PrivateRoute
              exact
              path={"/:user_id/inventory/edit-item/:item_id"}
              component={EditItemPage}
            />
            <Redirect from="/" to="/login"></Redirect>
            <Route component={NotFoundPage}></Route>{" "}
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);

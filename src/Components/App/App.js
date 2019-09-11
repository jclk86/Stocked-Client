import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import AddItemPage from "../../routes/AddItemPage/AddItemPage";
import EditItemPage from "../../routes/EditItemPage/EditItemPage";
import InventoryListPage from "../../routes/InventoryListPage/InventoryListPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className="App">
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <Switch>
            <Route
              exact
              path={"/:user_id/inventory"}
              component={InventoryListPage}
            />{" "}
            <Route
              exact
              path={"/:user_id/tags/:tag_id"}
              component={InventoryListPage}
            />
            <Route exact path={"/login"} component={LoginPage} />
            <Route exact path={"/register"} component={RegistrationPage} />
            <Route
              exact
              path={"/:user_id/inventory/add-item"}
              component={AddItemPage}
            />
            <Route
              exact
              path={"/:user_id/inventory/edit-item/:item_id"}
              component={EditItemPage}
            />
            <Route component={NotFoundPage}></Route>{" "}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

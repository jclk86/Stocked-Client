import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import Header from "../Header/Header";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import AddItemPage from "../../routes/AddItemPage/AddItemPage";
import EditItemPage from "../../routes/EditItemPage/EditItemPage";
import InventoryListPage from "../../routes/InventoryListPage/InventoryListPage";
import AddTagPage from "../../routes/AddTagPage/AddTagPage";

import "./App.css";

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
            <Route exact path={"/"} component={InventoryListPage} />
            <Route exact path={"/tags/:tagId"} component={InventoryListPage} />
            <Route exact path={"/login"} component={LoginPage} />
            <Route exact path={"/register"} component={RegistrationPage} />
            <Route exact path={"/add-item"} component={AddItemPage} />
            <Route exact path={"/edit-item/:itemId"} component={EditItemPage} />
            <Route exact path={"/add-tag"} component={AddTagPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

// <Route exact path={"/"} component={Tags} /> //show all returns here
//
//   <Route exact path={"/tags/:tagId"} component={Tags} /> // this is needed so you can get to this page for itemID to match
//   <Route exact path={"/tags/:tagId"} component={InventoryListPage} /> --match all item ids with tagID
// Route NOT FOUND PAGE

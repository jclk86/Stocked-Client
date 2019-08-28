import React, { Component } from "react";
import { Route } from "react-router-dom";
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
          <Route exact path={"/"} component={InventoryListPage} />
          <Route exact path={"/login"} component={LoginPage} />
          <Route exact path={"/register"} component={RegistrationPage} />
          <Route exact path={"/add-item"} component={AddItemPage} />
          <Route exact path={"/edit-item"} component={EditItemPage} />
          <Route exact path={"/add-tag"} component={AddTagPage} />
        </main>
      </div>
    );
  }
}

export default App;

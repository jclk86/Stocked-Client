import React, { Component } from "react";
import { tags, inventory, units } from "../data";

const InventoryContext = React.createContext({
  inventoryList: [],
  setInventoryList: () => {}
});
export default InventoryContext;

export class InventoryProvider extends Component {
  state = {
    inventoryList: inventory
  };

  setInventoryList = inventoryList => {
    this.setState({ inventoryList });
  };

  addInventoryItem = item => {
    this.setState({ inventoryList: [...this.state.inventoryList, item] });
    this.checkDB();
  };

  checkDB = () => {
    console.log(this.state.inventoryList);
  };

  render() {
    const value = {
      inventoryList: this.state.inventoryList,
      tagsList: tags,
      unitsList: units,
      addInventoryItem: this.addInventoryItem,
      setInventorylist: this.setInventoryList
    };
    return (
      <InventoryContext.Provider value={value}>
        {this.props.children}
      </InventoryContext.Provider>
    );
  }
}

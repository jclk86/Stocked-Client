import React, { Component } from "react";
import { tags, inventory, units } from "../data";

const InventoryContext = React.createContext({
  inventoryList: [],
  tagsList: [],
  unitsList: [],
  addInventoryItem: () => {},
  setInventoryList: () => {},
  updateInventoryItem: () => {},
  deleteInventoryItem: () => {}
});
export default InventoryContext;

export class InventoryProvider extends Component {
  state = {
    inventoryList: inventory
  };

  setInventoryList = inventoryList => {
    // for api
    this.setState({ inventoryList });
  };

  addInventoryItem = item => {
    this.setState({ inventoryList: [...this.state.inventoryList, item] });
  };

  updateInventoryItem = updatedItem => {
    this.setState({
      inventoryList: this.state.inventoryList.map(item =>
        item.itemId !== updatedItem.itemId ? item : updatedItem
      )
    });
    console.log(this.state.inventoryList);
  };

  deleteInventoryItem = deletedItemId => {
    console.log(deletedItemId);
    this.setState({
      inventoryList: this.state.inventoryList.filter(
        item => item.itemId !== parseInt(deletedItemId)
      )
    });
  };

  render() {
    const contextValue = {
      inventoryList: this.state.inventoryList,
      date: new Date(),
      userId: 1,
      tagsList: tags,
      unitsList: units,
      addInventoryItem: this.addInventoryItem,
      setInventorylist: this.setInventoryList,
      updateInventoryItem: this.updateInventoryItem,
      deleteInventoryItem: this.deleteInventoryItem
    };
    return (
      <InventoryContext.Provider value={contextValue}>
        {this.props.children}
      </InventoryContext.Provider>
    );
  }
}

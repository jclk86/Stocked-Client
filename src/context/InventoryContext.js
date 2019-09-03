import React, { Component } from "react";
import { tags, inventory, units, user } from "../data";

const InventoryContext = React.createContext({
  inventoryList: [],
  tagsList: [],
  unitsList: [],
  error: null,
  addInventoryItem: () => {},
  setInventoryList: () => {},
  updateInventoryItem: () => {},
  deleteInventoryItem: () => {},
  clearInventoryItem: () => {},
  setError: () => {},
  clearError: () => {}
});
export default InventoryContext;

export class InventoryProvider extends Component {
  state = {
    inventoryList: inventory, // change to nullInventory,
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error }); // these must be set with conditionals. on the component rendering area you want to render error message if not rendered. Context becomes errorboundary, Not need fo errorBoundary component
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setInventoryList = inventoryList => {
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
  };

  deleteInventoryItem = deletedItemId => {
    this.setState({
      inventoryList: this.state.inventoryList.filter(
        item => item.itemId !== parseInt(deletedItemId)
      )
    });
  };

  // clearArticle = () => {
  //   this.setInventoryList(nullInventory)
  //   this.setComments([])
  // }

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

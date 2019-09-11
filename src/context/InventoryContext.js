import React, { Component } from "react";
import { tags, inventory, units, user } from "../data";

const InventoryContext = React.createContext({
  inventoryList: [],
  tagsList: [],
  unitsList: [], // don't need
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
    inventoryList: [], // change to nullInventory,
    tagsList: [],
    error: null
  };

  setInventoryList = inventoryList => {
    this.setState({ inventoryList });
  };

  setTagsList = tagsList => {
    this.setState({ tagsList });
    console.log(this.state.tagsList);
  };

  setError = error => {
    console.error(error);
    this.setState({ error }); // these must be set with conditionals. on the component rendering area you want to render error message if not rendered. Context becomes errorboundary, Not need fo errorBoundary component
  };

  clearError = () => {
    this.setState({ error: null });
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
      tagsList: this.state.tagsList,
      unitsList: units,
      setInventoryList: this.setInventoryList,
      setTagsList: this.setTagsList,
      addInventoryItem: this.addInventoryItem,
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

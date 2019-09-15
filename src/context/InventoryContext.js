import React, { Component } from "react";

const InventoryContext = React.createContext({
  inventoryList: [],
  tagsList: [],
  error: null,
  addInventoryItem: () => {},
  setInventoryList: () => {},
  updateInventoryItem: () => {},
  deleteInventoryItem: () => {},
  setError: () => {},
  clearError: () => {}
});
export default InventoryContext;

export class InventoryProvider extends Component {
  state = {
    inventoryList: [],
    tagsList: [],
    error: null
  };

  setInventoryList = inventoryList => {
    this.setState({ inventoryList });
    console.log(this.state.inventoryList);
  };

  setTagsList = tagsList => {
    this.setState({ tagsList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
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
        item.item_id !== updatedItem.item_id ? item : updatedItem
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

  render() {
    const contextValue = {
      inventoryList: this.state.inventoryList,
      tagsList: this.state.tagsList,
      setInventoryList: this.setInventoryList,
      setTagsList: this.setTagsList,
      addInventoryItem: this.addInventoryItem,
      updateInventoryItem: this.updateInventoryItem,
      deleteInventoryItem: this.deleteInventoryItem,
      error: this.state.error,
      clearError: this.clearError,
      setError: this.setError
    };
    return (
      <InventoryContext.Provider value={contextValue}>
        {this.props.children}
      </InventoryContext.Provider>
    );
  }
}

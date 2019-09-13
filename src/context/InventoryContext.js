import React, { Component } from "react";

const InventoryContext = React.createContext({
  inventoryList: [],
  tagsList: [],
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
    inventoryList: [],
    tagsList: [],
    error: null
  };

  setInventoryList = inventoryList => {
    this.setState({ inventoryList });
  };

  setTagsList = tagsList => {
    this.setState({ tagsList });
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

  // clearItem = () => {
  //   this.setInventoryList(nullInventory)
  //   this.setComments([])
  // }

  render() {
    const contextValue = {
      inventoryList: this.state.inventoryList,
      user_id: 1, // hardcoded. Change
      tagsList: this.state.tagsList,
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

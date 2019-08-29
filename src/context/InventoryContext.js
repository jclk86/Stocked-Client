import React, { Component } from "react";
import { tags, inventory } from "../data";

const InventoryContext = React.createContext({
  inventoryList: [],
  tagsList: [],
  setInventoryList: () => {},
  setTagsList: () => {}
});
export default InventoryContext;

export class InventoryProvider extends Component {
  state = {
    inventoryList: inventory,
    tagsList: tags
  };

  setInventoryList = inventoryList => {
    this.setState({ inventoryList });
  };

  setTagsList = tagsList => {
    this.setState({ tagsList });
  };

  addInventoryItem = item => {
    this.setState({ inventoryList: [...this.state.inventoryList, item] });
  };

  render() {
    const value = {
      inventoryList: this.state.inventoryList,
      tagsList: this.state.tagsList,
      addInventoryItem: this.addInventoryItem
    };
    return (
      <InventoryContext.Provider value={value}>
        {this.props.children}
      </InventoryContext.Provider>
    );
  }
}

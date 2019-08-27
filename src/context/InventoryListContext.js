import React, { Component } from "react";

const InventoryListContext = React.createContext({
  inventoryList: [],
  setInventoryList: () => {}
});
export default InventoryListContext;

export class InventoryListProvider extends Component {
  state = {
    inventoryList: []
  };

  setInventoryList = inventoryList => {
    this.setState({ inventoryList });
  };

  render() {
    const value = {
      inventoryList: this.state.inventoryList
    };
    return (
      <InventoryListContext.Provider value={value}>
        {this.props.children}
      </InventoryListContext.Provider>
    );
  }
}

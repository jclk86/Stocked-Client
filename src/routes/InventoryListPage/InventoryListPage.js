import React, { Component } from "react";
import { Section } from "../../Components/Utils/Utils";
import InventoryListItem from "../../Components/InventoryListItem/InventoryListItem";
import InventoryListContext from "../../context/InventoryListContext";
import InventoryList from "../../data";
import Header from "../../Components/Header/Header";

export default class InventoryListPage extends Component {
  static contextType = InventoryListContext;

  renderInventory() {
    return InventoryList.map(item => (
      <InventoryListItem key={item.itemId} item={item} />
    ));
  }
  render() {
    return (
      <div className="container_inventory_list_page">
        <Header></Header>
        <Section list className="InventoryListPage">
          {this.renderInventory()}
        </Section>
      </div>
    );
  }
}

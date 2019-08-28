import React, { Component } from "react";
import { Section } from "../../Components/Utils/Utils";
import InventoryListItem from "../../Components/InventoryListItem/InventoryListItem";
import InventoryContext from "../../context/InventoryContext"; //filename
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./InventoryListPage.css";

export default class InventoryListPage extends Component {
  static contextType = InventoryContext;

  renderInventory() {
    return this.context.inventoryList.map(item => (
      <InventoryListItem key={item.itemId} item={item} />
    ));
  }
  render() {
    return (
      <div className="container_inventory_list_page">
        <Header></Header>
        <SearchBar></SearchBar>
        <Section list className="InventoryListPage">
          {this.renderInventory()}
        </Section>
      </div>
    );
  }
}

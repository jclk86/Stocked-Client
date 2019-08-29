import React, { Component } from "react";
import { Section } from "../../Components/Utils/Utils";
import InventoryListItem from "../../Components/InventoryListItem/InventoryListItem";
import InventoryContext from "../../context/InventoryContext"; //filename
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./InventoryListPage.css";
import { getInventoryListForTag } from "../../services/inventory-api-service";

export default class InventoryListPage extends Component {
  static contextType = InventoryContext;

  render() {
    const itemsForTag = getInventoryListForTag(
      this.context.inventoryList,
      this.props.match.params.tagId
    );
    return (
      <div className="container_inventory_list_page">
        <Header></Header>
        <SearchBar></SearchBar>
        <Section list className="InventoryListPage">
          {itemsForTag.map(item => (
            <InventoryListItem key={item.itemId} item={item} />
          ))}
        </Section>
      </div>
    );
  }
}

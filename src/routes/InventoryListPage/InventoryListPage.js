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
  state = {
    search: ""
  };

  render() {
    const { inventoryList } = this.context;
    const itemsForTag = getInventoryListForTag(
      this.context.inventoryList,
      this.props.match.params.tagId
    );
    // const filteredSearch = .filter(item => {
    //   return item.name.indexOf(this.state.search) !== -1;
    // }) -- you need work off of the itemsForTag below. So it goes through 2 filters --
    // save below to variable and then use it in this function and use result of this function
    // to render inventory list
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

// if (this.state.search) {
//   params.push(`search=${this.state.search}`);
// }

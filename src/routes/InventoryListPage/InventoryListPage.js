import React, { Component } from "react";
import "./InventoryListPage.css";
import { Section } from "../../Components/Utils/Utils";
import { getInventoryListForTag } from "../../services/inventory-api-service";
import InventoryListItem from "../../Components/InventoryListItem/InventoryListItem";
import InventoryContext from "../../context/InventoryContext";
import Header from "../../Components/Header/Header";
import Tags from "../../Components/Tags/Tags";

export default class InventoryListPage extends Component {
  static contextType = InventoryContext;
  state = {
    search: ""
  };

  updateSearch = filter => {
    this.setState({ search: filter });
  };

  render() {
    const itemsForTag = getInventoryListForTag(
      this.context.inventoryList,
      this.props.match.params.tagId
    );
    const filteredItems = itemsForTag.filter(item => {
      return item.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    return (
      <div className="container_inventory_list_page">
        <Header></Header>
        <Tags></Tags>
        <div className="container_search_filter">
          <label htmlFor="search_filter"></label>
          <input
            id="search_filter"
            onChange={e => this.updateSearch(e.target.value)}
            type="text"
            placeholder="search"
            className="search_filter"
          ></input>
        </div>
        <Section list className="InventoryListPage">
          {filteredItems.map(item => (
            <InventoryListItem key={item.itemId} item={item} />
          ))}
        </Section>
      </div>
    );
  }
}

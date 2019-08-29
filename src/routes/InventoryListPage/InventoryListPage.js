import React, { Component } from "react";
import { Section } from "../../Components/Utils/Utils";
import { NavLink } from "react-router-dom";
import InventoryListItem from "../../Components/InventoryListItem/InventoryListItem";
import InventoryContext from "../../context/InventoryContext"; //filename
import Header from "../../Components/Header/Header";
import Tags from "../../Components/Tags/Tags";
import "./InventoryListPage.css";
import { getInventoryListForTag } from "../../services/inventory-api-service";

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
          <input
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

// if (this.state.search) {
//   params.push(`search=${this.state.search}`);
// }

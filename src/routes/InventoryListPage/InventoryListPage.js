import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./InventoryListPage.css";
import { Section } from "../../Components/Utils/Utils";
import { getInventoryListForTag } from "../../services/inventory-api-service";
import InventoryListItem from "../../Components/InventoryListItem/InventoryListItem";
import InventoryContext from "../../context/InventoryContext";
import Header from "../../Components/Header/Header";
import TagsListItem from "../../Components/TagsListItem/TagsListItem";
import SearchBox from "../../Components/SearchBox/SearchBox";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";

export default class InventoryListPage extends Component {
  static contextType = InventoryContext;
  state = {
    search: ""
  };

  updateSearch = filter => {
    this.setState({ search: filter });
  };

  renderTags() {
    return this.context.tagsList.map(tag => (
      <TagsListItem key={tag.tagId} tag={tag}></TagsListItem>
    ));
  }

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
        <ul className="tags_list">
          <ErrorBoundary>
            {this.renderTags()}
            <NavLink to="/" className="container_btn_show_all">
              <button type="button" className="btn_show_all">
                Show All
              </button>
            </NavLink>
          </ErrorBoundary>
        </ul>
        <SearchBox updateSearch={this.updateSearch}></SearchBox>

        <Section list className="InventoryListPage">
          {filteredItems.map(item => (
            <InventoryListItem key={item.itemId} item={item} />
          ))}
        </Section>
      </div>
    );
  }
}

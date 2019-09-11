import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./InventoryListPage.css";
import { Section } from "../../Components/Utils/Utils";
import InventoryListItem from "../../Components/InventoryListItem/InventoryListItem";
import InventoryContext from "../../context/InventoryContext";
import InventoryApiService from "../../services/inventory-api-service";
import Header from "../../Components/Header/Header";
import TagsListItem from "../../Components/TagsListItem/TagsListItem";
import SearchBox from "../../Components/SearchBox/SearchBox";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";

export default class InventoryListPage extends Component {
  static contextType = InventoryContext;
  state = {
    search: ""
  };
  // this user_id is hardcoded. Remember to change it.
  componentDidMount() {
    InventoryApiService.getInventory(1).then(this.context.setInventoryList);
    InventoryApiService.getAllTags().then(this.context.setTagsList);
  }

  getInventoryListForTag(items, tag_name) {
    const tagName = tag_name;
    return !tagName ? items : items.filter(item => item.tag === tagName);
  }

  updateSearch = filter => {
    this.setState({ search: filter });
  };

  renderTags() {
    return this.context.tagsList.map(tag => (
      <TagsListItem key={tag.name} tag={tag}></TagsListItem>
    ));
  }

  render() {
    const itemsForTag = this.getInventoryListForTag(
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
            <InventoryListItem key={item.id} item={item} />
          ))}
        </Section>
      </div>
    );
  }
}

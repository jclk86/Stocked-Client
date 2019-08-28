import React, { Component } from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./SearchBar.css";
import InventoryContext from "../../context/InventoryContext";
import TagsListItem from "../../Components/TagsListItem/TagsListItem";

export default class SearchBar extends Component {
  static contextType = InventoryContext;
  renderTags() {
    return this.context.tagsList.map(tag => (
      <TagsListItem key={tag.tagId} tag={tag}>
        <li>{tag.name}</li>
      </TagsListItem>
    ));
  }
  render() {
    return (
      <div className="search_bar">
        <ul className="tags_list">{this.renderTags()}</ul>
        <SearchBox></SearchBox>
      </div>
    );
  }
}

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Tags.css";
import InventoryContext from "../../context/InventoryContext";
import TagsListItem from "../TagsListItem/TagsListItem";

export default class Tags extends Component {
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
      <div className="container_tags">
        <ul className="tags_list">
          {this.renderTags()}

          <NavLink to="/">
            <button type="button" className="btn_show_all">
              Show All
            </button>
          </NavLink>
        </ul>
      </div>
    );
  }
}

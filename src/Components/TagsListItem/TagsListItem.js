import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./TagsListItem.css";

export default class TagsListItem extends Component {
  render() {
    const { tag } = this.props;
    return (
      <NavLink to={"/"} className="tag_item">
        {tag.name}
      </NavLink>
    );
  }
}

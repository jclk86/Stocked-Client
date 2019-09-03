import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./TagsListItem.css";

export default class TagsListItem extends Component {
  render() {
    const { tag } = this.props;
    return (
      <NavLink to={`/tags/${tag.tagId}`} className="tag_item">
        <li className="list_item_tag">{tag.name}</li>
      </NavLink>
    );
  }
}

TagsListItem.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string,
    tagId: PropTypes.number
  })
};

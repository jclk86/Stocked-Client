import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./TagsListItem.css";

class TagsListItem extends Component {
  render() {
    const { tag, user_id } = this.props;
    return (
      <NavLink to={`/${user_id}/tags/${tag.name}`} className="tag_item">
        <li className="list_item_tag" key={tag.name}>
          {tag.name}
        </li>
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

export default withRouter(TagsListItem);

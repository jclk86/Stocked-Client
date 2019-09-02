import React, { Component } from "react";
import "./SearchBox.css";

export default class SearchBox extends Component {
  static defaultProps = {
    updateSearch: () => {}
  };

  render() {
    return (
      <div className="container_search_filter">
        <label htmlFor="search_filter"></label>
        <input
          id="search_filter"
          name="search_filter"
          onChange={e => this.props.updateSearch(e.target.value)}
          type="text"
          placeholder="search"
          className="search_inventory_filter"
        ></input>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./SearchBox.css";

export default class SearchBox extends Component {
  render() {
    return (
      <form className="form_search_bar">
        <label htmlFor="search_filter">Search Filter: </label>
        <input
          type="text"
          placeholder="search"
          className="search_filter"
        ></input>
      </form>
    );
  }
}

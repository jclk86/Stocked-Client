import React, { Component } from "react";
import "./SearchBox.css";

export default class SearchBox extends Component {
  render() {
    return (
      <form className="form_search_bar">
        <input type="text" placeholder="search"></input>
      </form>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <h1>STOCKED</h1>
        <Link to="/login">Logout</Link>
      </div>
    );
  }

  render() {
    return <nav className="Header">{this.renderLogoutLink()}</nav>;
  }
}

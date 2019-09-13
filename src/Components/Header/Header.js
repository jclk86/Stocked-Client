import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../Components/Utils/Utils";
import "./Header.css";

export default class Header extends Component {
  // change the link for stocked logo
  render() {
    const { user_id } = this.props;
    return (
      <NavBar>
        <NavLink
          role="navigation"
          to={`/${user_id}/inventory`}
          className="nav_link"
        >
          <h1 className="header_inventory_list_page">STOCKED</h1>
        </NavLink>
        <div className="nav_top_right_links">
          <NavLink
            role="navigation"
            to={`/${user_id}/inventory`}
            className="nav_link top_right_link"
          >
            View Inventory
          </NavLink>
          <NavLink
            role="navigation"
            to={`/${user_id}/inventory/add-item`}
            className="nav_link top_right_link"
          >
            Add Inventory
          </NavLink>
          <NavLink
            role="navigation"
            to="/login"
            className="nav_link top_right_link"
          >
            Logout
          </NavLink>
        </div>
      </NavBar>
    );
  }
}

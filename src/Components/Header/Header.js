import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../Components/Utils/Utils";
import IdleService from "../../services/idle-service";
import TokenService from "../../services/token-service";
import "./Header.css";
import logo from "../../images/logo.png";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };
  render() {
    const { user_id } = this.props;
    return (
      <NavBar>
        <div className="container_logo">
          {" "}
          <img src={logo} alt="stocked logo" className="logo_main"></img>
        </div>

        <div className="nav_top_right_links">
          <NavLink
            role="navigation"
            to={`/${user_id}/inventory`}
            className="nav_link top_right_link "
          >
            <button className="nav_buttons view_inventory_button">
              View Inventory
            </button>
          </NavLink>
          <NavLink
            role="navigation"
            to={`/${user_id}/inventory/add-item`}
            className="nav_link top_right_link "
          >
            <button className="nav_buttons add_inventory_button">
              Add Inventory
            </button>
          </NavLink>
          <NavLink
            role="navigation"
            onClick={this.handleLogoutClick}
            to="/login"
            className="nav_link top_right_link "
          >
            <button className="nav_buttons logout_button">Logout</button>
          </NavLink>
        </div>
      </NavBar>
    );
  }
}

import React, { Component } from "react";
import "./InventoryListItem.css";
import { NavLink } from "react-router-dom";
// import { Logo } from "../Utils/Utils";
import "./InventoryListItem.css";

export default class InventoryListItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <NavLink to={"/edit-item"} className="item_card">
        <img src={item.image} className="inventory_image"></img>
        <h2>{item.name}</h2>
        <p> {item.description}</p>
        <p> Qty: {item.quantity}</p>
      </NavLink>
    );
  }
}

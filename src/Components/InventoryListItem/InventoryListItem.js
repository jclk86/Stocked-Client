import React, { Component } from "react";
import "./InventoryListItem.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default class InventoryListItem extends Component {
  renderRestockMessage = itemQuantity => {
    return parseInt(itemQuantity) === 0 ? "None left. Restock." : itemQuantity;
  };

  renderTotalCost = (itemQuantity, itemCost) => {
    return `$ ${(itemQuantity * itemCost).toFixed(2)}`;
  };

  render() {
    const { item } = this.props;
    return (
      <NavLink
        role="navigation"
        to={`/edit-item/${item.itemId}`}
        className="item_card"
      >
        <div role="img" aria-label={`A ${item.name}`}>
          <img
            src={item.image}
            className="inventory_image"
            alt={`${item.name}`}
          ></img>
        </div>
        <h2>{item.name}</h2>
        <p> {item.description}</p>
        <p className={item.quantity === 0 ? "restock_message" : ""}>
          {" "}
          Qty: {this.renderRestockMessage(item.quantity)}
        </p>
        <p>Total Cost: {this.renderTotalCost(item.quantity, item.cost)}</p>
      </NavLink>
    );
  }
}

InventoryListItem.defaultProps = {
  image:
    "https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  date: new Date()
};

InventoryListItem.propTypes = {
  item: PropTypes.shape({
    userId: PropTypes.number,
    itemId: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    cost: PropTypes.number
  })
};

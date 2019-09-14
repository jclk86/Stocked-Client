import React, { Component } from "react";
import "./InventoryListItem.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default class InventoryListItem extends Component {
  renderRestockMessage = (itemQuantity, itemUnit) => {
    return parseInt(itemQuantity) === 0 ? (
      <span className="restock_message">None left. Restock.</span>
    ) : (
      <span>
        {itemQuantity} {itemUnit}
      </span>
    );
  };

  renderTotalCost = (itemQuantity, itemCost) => {
    const calc = itemQuantity * itemCost;
    const totalCost = calc.toFixed(2);
    return `$  ${totalCost}`;
  };

  render() {
    const { item } = this.props;
    return (
      <NavLink
        role="navigation"
        to={`/${item.user_id}/inventory/edit-item/${item.item_id}`}
        className="item_card"
      >
        <div role="img" aria-label={`A ${item.name}`}>
          <img
            src={item.image_url}
            className="inventory_image"
            alt={`${item.name}`}
          ></img>
        </div>

        <h2>{item.name}</h2>
        <p> {item.desc}</p>
        <div
          className={item.quantity === 0 ? "restock_message" : "qty_no_style"}
        >
          {" "}
          Qty: {this.renderRestockMessage(item.quantity, item.unit)}
        </div>
        <p>Total Cost: </p>
        <p>{this.renderTotalCost(item.quantity, item.cost_per_unit)}</p>
      </NavLink>
    );
  }
}

InventoryListItem.defaultProps = {
  image:
    "https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
};

InventoryListItem.propTypes = {
  item: PropTypes.shape({
    user_id: PropTypes.number,
    item_id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    quantity: PropTypes.number,
    cost_per_unit: PropTypes.string
  })
};

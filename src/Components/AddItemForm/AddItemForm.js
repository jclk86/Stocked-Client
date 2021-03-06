import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./AddItemForm.css";
import { Form, Input, Required, Button, Textarea } from "../Utils/Utils";
import InventoryContext from "../../context/InventoryContext";
import InventoryApiService from "../../services/inventory-api-service";
import TokenService from "../../services/token-service";
import {
  ValidationError,
  validateName,
  validateQuantity,
  validateUnit,
  validateCost,
  validateTag
} from "../ValidationError/ValidationError";

class AddItemForm extends Component {
  static contextType = InventoryContext;
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false
      },
      quantity: {
        value: "",
        touched: false
      },
      unit: {
        value: "",
        touched: false
      },
      cost_per_unit: {
        value: "",
        touched: false
      },
      desc: {
        value: ""
      },
      image_url: {
        value: ""
      },
      tag: {
        value: "",
        touched: false
      }
    };
  }

  updateName = name => {
    this.setState({ name: { value: name, touched: true } });
  };

  updateQuantity = quantity => {
    this.setState({ quantity: { value: quantity, touched: true } });
  };

  updateUnit = unit => {
    if (unit.match("^[a-zA-Z]*$") != null) {
      this.setState({ unit: { value: unit, touched: true } });
    }
  };

  updateCost = cost => {
    this.setState({ cost_per_unit: { value: cost, touched: true } });
  };

  updateDescription = description => {
    this.setState({ desc: { value: description } });
  };

  updateImageURL = imageURL => {
    this.setState({ image_url: { value: imageURL } });
  };

  updateTag = tag => {
    this.setState({ tag: { value: tag, touched: true } });
  };

  componentDidMount() {
    InventoryApiService.getAllTags().then(this.context.setTagsList);
  }

  handleSubmit = event => {
    event.preventDefault();
    const token = TokenService.readJwtToken();

    const {
      name,
      quantity,
      unit,
      cost_per_unit,
      desc,
      image_url,
      tag
    } = this.state;

    // Create item object to be added to Context Provider.
    const item = {
      name: name.value,
      quantity: parseInt(quantity.value),
      tag: tag.value,
      image_url: image_url.value
        ? image_url.value
        : "https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      desc: desc.value,
      unit: unit.value,
      cost_per_unit: cost_per_unit.value
    };
    // Adds item to Context Provider, which populates the state in the App component, which renders
    // in inventory in InventoryPage component.
    InventoryApiService.postItem(item, token.id)
      .then(this.context.addInventoryItem(item))
      .then(() => {
        this.props.history.push(`/${token.id}/inventory`);
      });
  };
  // Disables submit button until all conditions are met.
  isFormValid = () => {
    const { name, quantity, unit, cost_per_unit, tag } = this.state;
    return (
      name.value &&
      name.value.length < 20 &&
      name.value.length >= 3 &&
      quantity.value &&
      quantity.value < 1000 &&
      unit.value &&
      unit.value.length <= 5 &&
      cost_per_unit.value &&
      cost_per_unit.value < 500 &&
      tag.value
    );
  };

  render() {
    const { quantity, cost_per_unit, name, unit, tag } = this.state;
    const token = TokenService.readJwtToken();
    const { tagsList } = this.context;

    // Disables submit button till form is appropriately filled out.
    const isValid = this.isFormValid();
    return (
      <Form
        className="AddItem_Form"
        onSubmit={event => this.handleSubmit(event)}
      >
        <h2 className="title_add_item_form">Add Item</h2>
        <div className="item_name">
          <label
            htmlFor="AddItemForm__item_name"
            className="label_add_item_form"
          >
            Item Name <Required />
          </label>
          <Input
            placeholder="apples..."
            name="item_name"
            type="text"
            id="AddItemForm__item_name"
            onChange={e => this.updateName(e.target.value)}
          />
          {name.touched && (
            <ValidationError message={validateName(name.value)} />
          )}
        </div>
        <div className="container_qty_cost">
          <div className="container_item_quantity">
            <label
              htmlFor="AddItemForm__item_quantity"
              className="label_integer_inputs"
            >
              Quantity <Required />
            </label>
            <input
              placeholder="5"
              className="integer_inputs"
              name="item_quantity"
              type="number"
              id="AddItemForm__item_quantity"
              step="1"
              min="0"
              onChange={e => this.updateQuantity(e.target.value)}
            />
            {quantity.touched && (
              <ValidationError message={validateQuantity(quantity.value)} />
            )}
          </div>
          <div className="container_item_units">
            <label
              htmlFor="AddItemForm__item_units"
              className="label_integer_inputs"
            >
              Units
              <Required />
            </label>
            <input
              placeholder="lbs"
              value={unit.value}
              className="integer_inputs"
              name="item_units"
              type="text"
              id="AddItemForm__units"
              onChange={e => this.updateUnit(e.target.value)}
            ></input>
            {unit.touched && (
              <ValidationError message={validateUnit(unit.value)} />
            )}
          </div>
          <div className="container_item_cost">
            <label
              htmlFor="AddItemForm__item_cost"
              className="label_integer_inputs"
            >
              Unit Cost <Required />
            </label>
            <input
              placeholder="2.99"
              className="integer_inputs"
              name="item_cost"
              type="number"
              id="AddItemForm__item_cost"
              onChange={e => this.updateCost(e.target.value)}
              step="0.01"
              min="0"
              max="1000.00"
            />
            {cost_per_unit.touched && (
              <ValidationError message={validateCost(cost_per_unit.value)} />
            )}
          </div>
        </div>
        <div className="description">
          <label
            htmlFor="AddItemForm__description"
            className="label_add_item_form"
          >
            Description
          </label>
          <Textarea
            placeholder="for apple pies..."
            name="description"
            id="AddItemForm__description"
            onChange={e => this.updateDescription(e.target.value)}
          ></Textarea>
        </div>
        <div className="image">
          <label htmlFor="AddItemForm__image" className="label_add_item_form">
            Image URL
          </label>
          <Input
            placeholder="https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            type="text"
            name="image_url"
            id="AddItemForm_image_url"
            onChange={e => this.updateImageURL(e.target.value)}
          ></Input>
        </div>
        <div className="tags">
          <label htmlFor="AddItemForm__tags" className="label_add_item_form">
            Tag
            <Required />
          </label>{" "}
          <select name="tag" onChange={e => this.updateTag(e.target.value)}>
            <option value="">Select Tag</option>
            {tagsList.map(tag => (
              <option key={tag.name} value={tag.name}>
                {tag.name}
              </option>
            ))}
          </select>
          {tag.touched && <ValidationError message={validateTag(tag.value)} />}
        </div>
        <div className="container_btn">
          <Button type="submit" role="button" disabled={!isValid}>
            Add
          </Button>
        </div>
        <div className="container_btn btn_cancel">
          <Button
            type="button"
            role="button"
            onClick={() => this.props.history.push(`/${token.id}/inventory`)}
          >
            Cancel
          </Button>
        </div>
      </Form>
    );
  }
}

export default withRouter(AddItemForm);

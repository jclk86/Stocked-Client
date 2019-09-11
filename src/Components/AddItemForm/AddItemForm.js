import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./AddItemForm.css";
import { Form, Input, Required, Button, Textarea } from "../Utils/Utils";
import InventoryContext from "../../context/InventoryContext";
import InventoryApiService from "../../services/inventory-api-service";
import {
  ValidationError,
  validateName,
  validateQuantity,
  validateUnit,
  validateCost
} from "../ValidationError/ValidationError";
// import { isValid } from "date-fns";

class AddItemForm extends Component {
  static contextType = InventoryContext;
  constructor(props) {
    super(props);
    this.state = {
      // change names according to
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
      cost: {
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
    this.setState({ unit: { value: unit, touched: true } });
  };

  updateCost = cost => {
    this.setState({ cost: { value: cost, touched: true } });
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
  // tags
  // need unit too
  componentDidMount() {
    InventoryApiService.getAllTags().then(this.context.setTagsList)
  }

  handleSubmit = event => {
    event.preventDefault();
    // const { user_id } = req.params
    const { name, quantity, unit, cost, desc, image_url, tag } = this.state;
    const item = {
      name: name.value,
      quantity: parseInt(quantity.value),
      tag: tag.value,
      image_url: image_url.value
        ? image_url.value
        : "https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      desc: desc.value,
      unit: unit.value,
      cost: parseInt(cost.value)
    };
    InventoryApiService.postItem(item, 1); // needs user id
    this.context.addInventoryItem(item);
    this.props.history.push("/");
  };

  isFormValid = () => {
    const { name, quantity, unit, cost, tag } = this.state;
    return (
      name.value && quantity.value && unit.value && cost.value && tag.value
    );
  };

  render() {
    const { quantity, cost, name, unit } = this.state;
    const { tagsList } = this.context;
    const isValid = this.isFormValid();
    return (
      <Form onSubmit={event => this.handleSubmit(event)}>
        <h2 className="title_add_item_form">Add Item</h2>
        <div className="item_name">
          <label
            htmlFor="AddItemForm__item_name"
            className="label_add_item_form"
          >
            Item Name <Required />
          </label>
          <Input
            name="item_name"
            type="text"
            id="AddItemForm__item_name"
            onChange={e => this.updateName(e.target.value)}
          />
          {this.state.name.touched && (
            <ValidationError message={validateName(name.value)} />
          )}
        </div>
        <div className="container_qty_cost">
          <div className="item_quantity">
            <label
              htmlFor="AddItemForm__item_quantity"
              className="label_integer_inputs"
            >
              Quantity <Required />
            </label>
            <input
              className="integer_inputs"
              name="item_quantity"
              type="number"
              id="AddItemForm__item_quantity"
              onChange={e => this.updateQuantity(e.target.value)}
            />
            {this.state.quantity.touched && (
              <ValidationError message={validateQuantity(quantity.value)} />
            )}
          </div>
          <div className="item_units">
            <label
              htmlFor="AddItemForm__item_units"
              className="label_integer_inputs"
            >
              Item Units <Required />
            </label>
            <input
              defaultValue={this.state.unit.value} // change. also, see below the units
              className="integer_inputs"
              name="item_units"
              type="text"
              id="AddItemForm__units"
              onChange={e => this.updateUnit(e.target.value)}
            >
            </input>
            {this.state.cost.touched && (
              <ValidationError message={validateUnit(unit.value)} />
            )}
          </div>
          <div className="item_cost">
            <label
              htmlFor="AddItemForm__item_cost"
              className="label_integer_inputs"
            >
              Cost per unit <Required />
            </label>
            <input
              className="integer_inputs"
              name="item_cost"
              type="number"
              id="AddItemForm__item_cost"
              onChange={e => this.updateCost(e.target.value)}
            />
            {this.state.cost.touched && (
              <ValidationError message={validateCost(cost.value)} />
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
          <select name="tag" defaultValue={this.state.tag.value}>
            {tagsList.map(tag => (
              <option key={tag.tagId} value={tag.tagId}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
        <div className="container_btn">
          <Button type="submit" role="button">
            Add
          </Button>
        </div>
        <div className="container_btn btn_cancel">
          <Button
            type="button"
            role="button"
            onClick={() => this.props.history.push("/")}
          >
            Cancel
          </Button>
        </div>
      </Form>
    );
  }
}

export default withRouter(AddItemForm);

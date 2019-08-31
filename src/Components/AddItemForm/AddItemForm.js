import React, { Component } from "react";
import { Form, Input, Required, Button, Textarea } from "../Utils/Utils";
import "./AddItemForm.css";
import InventoryContext from "../../context/InventoryContext";
import { withRouter } from "react-router-dom";
import ValidationError from "../ValidationError/ValidationError"

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
      itemUnits: {
        value: null,
        touched: false
      },
      itemCost: {
        value: null,
        touched: false
      },
      description: {
        value: ""
      },
      imageURL: {
        value: ""
      },
      tag: {
        value: null,
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

  updateItemUnits = itemUnits => {
    this.setState({ itemUnits: { value: itemUnits, touched: true } });
  };

  updateItemCost = itemCost => {
    this.setState({ itemCost: { value: itemCost, touched: true } });
  };

  updateDescription = description => {
    this.setState({ description: { value: description } });
  };

  updateImageURL = imageURL => {
    this.setState({ imageURL: { value: imageURL } });
  };

  updateTag = tag => {
    this.setState({ tag: { value: tag, touched: true } });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      item_name,
      item_quantity,
      item_units,
      item_cost,
      description,
      image_url,
      tag
    } = event.target;

    const item = {
      name: item_name.value,
      quantity: item_quantity.value,
      tag: tag.value,
      image: image_url.value,
      description: description.value,
      units: item_units.value,
      cost: item_cost.value
    };

    this.context.addInventoryItem(item);
    this.props.history.goBack();
  };

  validateName = () => {
    const name = this.state.name.value.trim()
    if (name.length === 0) {
      return "Please enter a name"
    } 
  }


  validateQuantity = () => {
    const quantity = this.state.quantity.value
    console.log(quantity)
    if(quantity === "") {
      return "Please enter quantity"
    }
  }

  render() {
    const { tagsList, unitsList } = this.context;
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
            required
            id="AddItemForm__item_name"
            onChange={e => this.updateName(e.target.value)}
          />
          {this.state.name.touched && <ValidationError message={this.validateName()}/>}
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
              required
              id="AddItemForm__item_quantity"
              onChange={e => this.updateQuantity(e.target.value)}
          
            />
            {this.state.quantity.touched && <ValidationError message={this.validateQuantity()}/>}
          </div>
          <div className="item_units">
            <label
              htmlFor="AddItemForm__item_units"
              className="label_integer_inputs"
            >
              Item Units <Required />
            </label>
            <select
              defaultValue={unitsList[0].unitId}
              className="integer_inputs"
              name="item_units"
              type="text"
              required
              id="AddItemForm__units"
              onChange={e => this.updateItemUnits(e.target.value)}
            >
              {unitsList.map(unit => (
                <option value={unit.unitId} key={unit.unitId}>
                  {unit.name}
                </option>
              ))}
            </select>
          </div>
          <div className="item_cost">
            <label
              htmlFor="AddItemForm__item_cost"
              className="label_integer_inputs"
            >
              Unit Cost <Required />
            </label>
            <input
              className="integer_inputs"
              name="item_cost"
              type="number"
              required
              id="AddItemForm__item_cost"
              onChange={e => this.updateItemCost(e.target.value)}
            />
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
            required
            id="AddItemForm__description"
            onChange={e => this.updateDescription(e.target.value)}
          ></Textarea>
        </div>
        <div className="image">
          <label htmlFor="AddItemForm__image" className="label_add_item_form">
            Image URL
          </label>
          <Input
            defaultValue="https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
          <select name="tag" defaultValue={tagsList[0].tagId}>
            {tagsList.map(tag => (
              <option key={tag.tagId} value={tag.tagId}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
        <div className="container_btn">
          <Button type="submit">Add</Button>
        </div>
        <div className="container_btn btn_cancel">
          <Button type="button" onClick={() => this.props.history.push("/")}>
            Cancel
          </Button>
        </div>
      </Form>
    );
  }
}

export default withRouter(AddItemForm);

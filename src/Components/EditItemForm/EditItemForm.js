import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./EditItemForm.css";
import { Form, Input, Required, Button, Textarea } from "../Utils/Utils";
import InventoryContext from "../../context/InventoryContext";
import {
  ValidationError,
  validateName,
  validateQuantity,
  validateCost
} from "../ValidationError/ValidationError";

class EditItemForm extends Component {
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
      itemUnit: {
        value: "",
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
        value: "",
        touched: false
      }
    };
  }

  prePopulateForm = (inventoryList, itemId) => {
    const itemObject = inventoryList.filter(item => {
      return item.itemId === parseInt(itemId)
        ? {
            userId: item.userId,
            itemId: item.itemId,
            name: item.name,
            quantity: parseInt(item.quantity),
            unit: parseInt(item.unit),
            cost: parseInt(item.cost),
            description: item.description,
            image: item.image,
            tag: parseInt(item.tag)
          }
        : "";
    });
    return itemObject[0];
  };

  editName = name => {
    this.setState({ name: { value: name, touched: true } });
  };

  editQuantity = quantity => {
    this.setState({ quantity: { value: quantity, touched: true } });
  };

  editItemUnit = itemUnit => {
    this.setState({ itemUnit: { value: itemUnit, touched: true } });
  };

  editItemCost = itemCost => {
    this.setState({ itemCost: { value: itemCost, touched: true } });
  };

  editDescription = description => {
    this.setState({ description: { value: description } });
  };

  editImageURL = imageURL => {
    this.setState({ imageURL: { value: imageURL } });
  };

  editTag = tag => {
    this.setState({ tag: { value: tag, touched: true } });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      quantity,
      itemUnit,
      itemCost,
      description,
      imageURL,
      tag
    } = this.state;
    // needs userId/should we set it in the route as well? Or can use the windows session storage?
    const item = {
      itemId: parseInt(this.props.match.params.itemId),
      name: name.value,
      date: new Date(),
      quantity: parseInt(quantity.value),
      tag: tag.value,
      image: imageURL.value
        ? imageURL.value
        : "https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: description.value,
      units: itemUnit.value,
      cost: parseInt(itemCost.value)
    };

    this.context.updateInventoryItem(item);
    this.props.history.goBack("/");
  };

  isFormValid = () => {
    const { name, quantity, itemUnit, itemCost, tag } = this.state;
    return (
      name.value &&
      quantity.value &&
      itemUnit.value &&
      itemCost.value &&
      tag.value
    );
  };

  handleDelete = (itemId, cb) => {
    cb(itemId);
    this.props.history.push("/");
  };

  render() {
    const { name, quantity, itemCost } = this.state;
    const { itemId } = this.props.match.params;
    const { inventoryList, unitsList } = this.context;
    const currentItemData = this.prePopulateForm(inventoryList, itemId); //set this to state
    const isValid = this.isFormValid(); // implement when
    return (
      <Form onSubmit={event => this.handleSubmit(event)}>
        <h2 className="title_edit_item_form">Edit Item</h2>
        <div className="container_item_name">
          <label
            htmlFor="EditItemForm__item_name"
            className="label_edit_item_form"
          >
            Item name <Required />
          </label>
          <Input
            defaultValue={currentItemData.name}
            name="item_name"
            type="text"
            required
            id="EditItemForm__item_name"
            onChange={e => this.editName(e.target.value)}
          />
          {name.touched && (
            <ValidationError message={validateName(name.value)} />
          )}
        </div>
        <div className="container_qty_cost">
          <div className="item_quantity">
            <label
              htmlFor="EditItemForm__item_quantity"
              className="label_integer_inputs"
            >
              Quantity <Required />
            </label>
            <input
              defaultValue={currentItemData.quantity}
              className="integer_inputs"
              name="item_quantity"
              type="number"
              required
              id="EditItemForm__item_quantity"
              onChange={e => this.editQuantity(e.target.value)}
            />
            {quantity.touched && (
              <ValidationError message={validateQuantity(quantity.value)} />
            )}
          </div>
          <div className="item_units">
            <label
              htmlFor="EditItemForm__item_units"
              className="label_integer_inputs"
            >
              Item Units <Required />
            </label>
            <select
              defaultValue={currentItemData.unit} //FIX
              htmlFor="EditItemForm__item_units"
              className="integer_inputs"
              name="item_units"
              type="text"
              required
              id="EditItemForm__units"
              onChange={e => this.editItemUnit(e.target.value)}
            >
              {" "}
              {unitsList.map(unit => (
                <option value={unit.unitId} key={unit.unitId}>
                  {unit.name}
                </option>
              ))}
            </select>
          </div>
          <div className="item_cost">
            <label
              htmlFor="EditItemForm__item_cost"
              className="label_integer_inputs"
            >
              Unit Cost <Required />
            </label>
            <input
              defaultValue={currentItemData.cost}
              className="integer_inputs"
              name="item_cost"
              type="number"
              required
              id="EditItemForm__item_cost"
              onChange={e => this.editItemCost(e.target.value)}
            />
            {itemCost.touched && (
              <ValidationError message={validateCost(itemCost.value)} />
            )}
          </div>
        </div>
        <div className="description">
          <label
            htmlFor="EditItemForm__description"
            className="label_edit_item_form"
          >
            Description
          </label>
          <Textarea
            defaultValue={currentItemData.description}
            name="description"
            required
            id="EditItemForm__description"
            onChange={e => this.editDescription(e.target.value)}
          ></Textarea>
        </div>
        <div className="image">
          <label htmlFor="AddItemForm__image" className="label_add_item_form">
            Image URL
          </label>
          <Input
            defaultValue={currentItemData.image}
            type="text"
            name="image_url"
            id="AddItemForm_image_url"
            onChange={e => this.editImageURL(e.target.value)}
          ></Input>
        </div>
        <div className="tags">
          <label htmlFor="EditItemForm__tags" className="label_edit_item_form">
            Tag
            <Required />
          </label>{" "}
          <select
            id="EditItemForm__tags"
            defaultValue={currentItemData.tag}
            name="tag"
            onChange={e => this.editTag(e.target.value)}
          >
            {this.context.tagsList.map(tag => (
              <option key={tag.tagId} value={tag.tagId}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
        <div className="container_btn">
          <Button type="submit" role="button">
            Edit
          </Button>
        </div>
        <div className="container_btn btn_delete">
          <Button
            type="button"
            role="button"
            onClick={() =>
              this.handleDelete(itemId, this.context.deleteInventoryItem)
            }
          >
            Delete
          </Button>
        </div>
        <div className="container_btn btn_cancel">
          <Button
            role="button"
            type="button"
            onClick={() => this.props.history.push("/")}
          >
            Cancel
          </Button>
        </div>
      </Form>
    );
  }
}

export default withRouter(EditItemForm);

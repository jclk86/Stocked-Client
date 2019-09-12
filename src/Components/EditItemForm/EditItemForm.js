import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./EditItemForm.css";
import { Form, Input, Required, Button, Textarea } from "../Utils/Utils";
import InventoryContext from "../../context/InventoryContext";
import InventoryApiService from "../../services/inventory-api-service";
import {
  ValidationError,
  validateName,
  validateQuantity,
  validateCost,
  validateUnit,
  validateTag
} from "../ValidationError/ValidationError";

// add Proptypes
class EditItemForm extends Component {
  static contextType = InventoryContext;
  constructor(props) {
    super(props);
    this.state = {
      tagsList: [],
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
        value: null,
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

  componentDidMount() {
    const { user_id, item_id } = this.props.match.params;
    InventoryApiService.getAllTags()
      .then(tags => {
        return tags;
      })
      .then(tags => {
        this.setState({ tagsList: tags });
      });
    InventoryApiService.getInventory(user_id).then(items => {
      this.context.setInventoryList(items);
    });
    InventoryApiService.getByUserAndItemId(user_id, item_id)
      .then(data => {
        return data[0];
      })
      .then(item => {
        this.setState({
          name: { value: item.name, touched: true },
          quantity: { value: item.quantity, touched: true },
          unit: { value: item.unit, touched: true },
          cost_per_unit: { value: item.cost_per_unit, touched: true },
          desc: { value: item.desc },
          image_url: { value: item.image_url },
          tag: { value: item.tag, touched: true }
        });
      });
  }

  editName = name => {
    this.setState({ name: { value: name, touched: true } });
  };

  editQuantity = quantity => {
    this.setState({ quantity: { value: quantity, touched: true } });
  };

  editItemUnits = itemUnits => {
    this.setState({ unit: { value: itemUnits, touched: true } });
  };

  editItemCost = cost => {
    this.setState({ cost_per_unit: { value: cost, touched: true } });
  };

  editDescription = description => {
    this.setState({ desc: { value: description } });
  };

  editImageURL = imageURL => {
    this.setState({ image_url: { value: imageURL } });
  };

  editTag = tag => {
    this.setState({ tag: { value: tag, touched: true } });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user_id, item_id } = this.props.match.params;

    const {
      name,
      quantity,
      unit,
      cost_per_unit,
      desc,
      image_url,
      tag
    } = this.state;

    const item = {
      user_id: Number(user_id),
      item_id: Number(item_id),
      name: name.value,
      quantity: Number(quantity.value),
      tag: tag.value,
      image_url: image_url.value
        ? image_url.value
        : "https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      desc: desc.value,
      unit: unit.value,
      cost_per_unit: parseInt(cost_per_unit.value)
    };

    this.context.updateInventoryItem(item);
    this.props.history.goBack(`/${user_id}/inventory`);
  };

  isFormValid = () => {
    const { name, quantity, unit, cost_per_unit, tag } = this.state;
    return (
      name.value &&
      quantity.value &&
      unit.value &&
      cost_per_unit.value &&
      tag.value
    );
  };

  handleDelete = (itemId, cb) => {
    cb(itemId);
    this.props.history.push("/");
  };
  // identify the tag
  // removed touched and put value instead for all validation errors
  render() {
    const {
      name,
      quantity,
      cost_per_unit,
      image_url,
      unit,
      desc,
      tag,
      tagsList
    } = this.state;
    const { item_id } = this.props.match.params;
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
            defaultValue={name.value}
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
              defaultValue={quantity.value}
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
            <input
              defaultValue={unit.value}
              htmlFor="EditItemForm__item_units"
              className="integer_inputs" // change class name
              name="item_units"
              type="text"
              required
              id="EditItemForm__units"
              onChange={e => this.editItemUnits(e.target.value)}
            ></input>
            {unit.touched && (
              <ValidationError message={validateUnit(unit.value)} />
            )}
          </div>
          <div className="item_cost">
            <label
              htmlFor="EditItemForm__item_cost"
              className="label_integer_inputs"
            >
              Unit Cost <Required />
            </label>
            <input
              defaultValue={cost_per_unit.value}
              className="integer_inputs"
              name="item_cost"
              type="number"
              required
              id="EditItemForm__item_cost"
              onChange={e => this.editItemCost(e.target.value)}
            />
            {cost_per_unit.touched && (
              <ValidationError message={validateCost(cost_per_unit.value)} />
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
            value={desc.value}
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
            defaultValue={image_url.value}
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
            value={tag.value}
            id="EditItemForm__tags"
            name="tag"
            onChange={e => this.editTag(e.target.value)}
          >
            {tagsList.map(tag => (
              <option key={tag.name} value={tag.name}>
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
              this.handleDelete(item_id, this.context.deleteInventoryItem)
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

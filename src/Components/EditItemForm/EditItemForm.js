import React, { Component } from "react";
import { Form, Input, Required, Button, Textarea } from "../Utils/Utils";
import { withRouter } from "react-router-dom";
import "./EditItemForm.css";
import InventoryContext from "../../context/InventoryContext";

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
      itemUnits: {
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

  // userId: 1,
  // itemId: 4,
  // image:
  //   "https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=abundance-apples-delicious-2487443.jpg&fm=jpg",
  // name: "Apple",
  // description: "Fuji apples",
  // quantity: 20,
  // date: new Date(),
  //   tag: 2,
  //     unit: 7,
  //       cost: 1.99
  // },

  prePopulateForm = (inventoryList, itemId) => {
    const itemObject = inventoryList.filter(item => {
      return item.itemId === parseInt(itemId)
        ? {
            name: item.name,
            quantity: item.quantity,
            unit: item.unit,
            cost: item.cost,
            description: item.description,
            image: item.image,
            tag: item.tag
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

  editItemUnits = itemUnits => {
    this.setState({ itemUnits: { value: itemUnits, touched: true } });
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
      item_name,
      item_quantity,
      item_units,
      item_cost,
      description,
      image_url,
      tag
    } = event.target;

    const item = {
      itemId: parseInt(this.props.match.params.itemId),
      name: item_name.value,
      date: new Date(),
      quantity: item_quantity.value,
      tag: tag.value,
      image: image_url.value,
      description: description.value,
      units: item_units.value,
      cost: item_cost.value
    };

    this.context.updateInventoryItem(item);
    this.props.history.goBack();
  };

  handleDelete = (itemId, cb) => {
    cb(itemId);
    this.props.history.goBack();
  };

  checkProps = () => {
    console.log(this.props.match.params.itemId);
  };

  render() {
    const { itemId } = this.props.match.params;
    const { inventoryList, unitsList } = this.context;
    const currentItemData = this.prePopulateForm(inventoryList, itemId);
    return (
      <Form onSubmit={event => this.handleSubmit(event)}>
        <h2 className="title_edit_item_form">Edit Item</h2>
        <div className="item_name">
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
              className="integer_inputs"
              name="item_units"
              type="text"
              required
              id="EditItemForm__units"
              onChange={e => this.editItemUnits(e.target.value)}
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
            defaultValue={currentItemData.image} // fix
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
        <div className="btn_container">
          <Button type="submit">Edit</Button>
        </div>
        <div className="btn_container btn_delete">
          <Button
            type="button"
            onClick={() =>
              this.handleDelete(itemId, this.context.deleteInventoryItem)
            }
          >
            Delete
          </Button>
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

export default withRouter(EditItemForm);

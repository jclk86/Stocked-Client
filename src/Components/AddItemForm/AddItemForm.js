import React, { Component } from "react";
import { Form, Input, Required, Button, Textarea } from "../Utils/Utils";
import "./AddItemForm.css";

export default class AddItemForm extends Component {
  render() {
    return (
      <Form>
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
          />
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
            />
          </div>
          <div className="item_units">
            <label
              htmlFor="AddItemForm__item_units"
              className="label_integer_inputs"
            >
              Item Units <Required />
            </label>
            <input
              className="integer_inputs"
              name="item_units"
              type="text"
              required
              id="AddItemForm__units"
            />
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
          ></Textarea>
        </div>
        <div className="image">
          <label htmlFor="AddItemForm__image" className="label_add_item_form">
            Image Url
          </label>
          <Input
            type="text"
            name="image_url"
            id="AddItemForm_image_url"
          ></Input>
        </div>

        <div className="tags">
          <label htmlFor="AddItemForm__tags" className="label_add_item_form">
            Category
            <Required />
          </label>{" "}
          <select>
            <option>Fruits</option>
            <option>Utensils</option>
            <option>Dairy</option>
            <option>Meats</option>
            <option>Sauces</option>
            <option>Herbs & Spices</option>
            <option>Beverages</option>
            <option>Detergent</option>
            <option>Cookware</option>
            <option>Vegetables</option>
          </select>
        </div>
        <div className="container_btn">
          <Button type="submit">Add</Button>
        </div>
        <div className="container_btn btn_cancel">
          <Button type="submit">Cancel</Button>
        </div>
      </Form>
    );
  }
}

import React, { Component } from "react";
import { Form, Input, Required, Button } from "../Utils/Utils";
import { NavLink } from "react-router-dom";
import "./AddTagForm.css";

export default class AddTagForm extends Component {
  render() {
    return (
      <Form>
        <div className="header_add_tag">
          <h2>STOCKED</h2>
        </div>
        <div className="container_tag_name">
          <label htmlFor="AddTagForm__tag_name" className="label_tag_name">
            Tag Name<Required></Required>
          </label>
          <Input required name="tag_name" id="AddTagForm__tag_name" />
        </div>
        <div className="container_add_tag_btn">
          <Button type="submit">Add</Button>
        </div>
      </Form>
    );
  }
}

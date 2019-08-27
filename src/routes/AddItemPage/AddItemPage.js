import React, { Component } from "react";
import { Section } from "../../Components/Utils/Utils";
import AddItemForm from "../../Components/AddItemForm/AddItemForm";

export default class AddItemPage extends Component {
  render() {
    return (
      <Section className="add_item_form">
        <AddItemForm></AddItemForm>
      </Section>
    );
  }
}

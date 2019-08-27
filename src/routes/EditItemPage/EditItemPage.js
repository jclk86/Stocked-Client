import React, { Component } from "react";
import { Section } from "../../Components/Utils/Utils";
import EditItemForm from "../../Components/EditItemForm/EditItemForm";

export default class EditItemPage extends Component {
  render() {
    return (
      <Section className="edit_item_form">
        <EditItemForm></EditItemForm>
      </Section>
    );
  }
}

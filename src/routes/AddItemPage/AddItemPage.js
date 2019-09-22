import React, { Component } from "react";
import { Section, Background } from "../../Components/Utils/Utils";
import AddItemForm from "../../Components/AddItemForm/AddItemForm";

export default class AddItemPage extends Component {
  render() {
    return (
      <Background>
        <Section className="add_item_form">
          <AddItemForm></AddItemForm>
        </Section>
      </Background>
    );
  }
}

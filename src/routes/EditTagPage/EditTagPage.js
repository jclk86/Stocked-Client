import React, { Component } from "react";
import { Section } from "../../Components/Utils/Utils";
import EditTagForm from "../../Components/EditTagForm/EditTagForm";

export default class EditTagPage extends Component {
  render() {
    return (
      <Section className="edit_tag_form">
        <EditTagForm></EditTagForm>
      </Section>
    );
  }
}

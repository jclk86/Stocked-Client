import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Section } from "../../Components/Utils/Utils";
import EditItemForm from "../../Components/EditItemForm/EditItemForm";
import InventoryApiService from "../../services/inventory-api-service";

class EditItemPage extends Component {
  render() {
    return (
      <Section className="edit_item_form">
        <EditItemForm></EditItemForm>
      </Section>
    );
  }
}

export default withRouter(EditItemPage);

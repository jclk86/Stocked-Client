import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Section, Background } from "../../Components/Utils/Utils";
import EditItemForm from "../../Components/EditItemForm/EditItemForm";

class EditItemPage extends Component {
  render() {
    return (
      <Background>
        <Section className="edit_item_form">
          <EditItemForm></EditItemForm>
        </Section>
      </Background>
    );
  }
}

export default withRouter(EditItemPage);

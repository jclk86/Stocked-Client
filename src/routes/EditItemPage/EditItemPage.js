import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Section } from "../../Components/Utils/Utils";
import EditItemForm from "../../Components/EditItemForm/EditItemForm";
import InventoryApiService from "../../services/inventory-api-service";

class EditItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: "",
        quantity: "",
        unit: "",
        cost_per_unit: "",
        desc: "",
        image_url: "",
        tag: ""
      }
    };
  }
  // componentDidMount() {
  //   const { user_id, item_id } = this.props.match.params;
  //   InventoryApiService.getByUserAndItemId(user_id, item_id).then(
  //     item => {
  //       return item[0];
  //       this.setState({
  //         name: item[0].name,
  //         quantity: item.quantity,
  //         unit: item.unit,
  //         cost_per_unit: item.cost_per_unit,
  //         desc: item.desc,
  //         image_url: item.image_url,
  //         tag: item.tag
  //       });
  //     }
  //   );
  // }

  render() {
    const { user_id, item_id } = this.props.match.params;
    return (
      <Section className="edit_item_form">
        <EditItemForm></EditItemForm>
      </Section>
    );
  }
}

export default withRouter(EditItemPage);

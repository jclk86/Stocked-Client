import React, { Component } from "react";
import { Section } from "../../Components/Utils/Utils";
import RegistrationForm from "../../Components/RegistrationForm/RegistrationForm";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <Section className="RegistrationPage">
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    );
  }
}

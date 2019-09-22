import React, { Component } from "react";
import { Section, Background } from "../../Components/Utils/Utils";
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
      <Background>
        <Section className="RegistrationPage">
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </Section>
      </Background>
    );
  }
}

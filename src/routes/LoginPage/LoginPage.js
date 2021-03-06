import React, { Component } from "react";
import { Section, Background } from "../../Components/Utils/Utils";
import { withRouter } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = userId => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || `/${userId}/inventory`;
    history.push({ pathname: destination, state: userId });
  };

  render() {
    return (
      <Background>
        <Section className="LoginPage">
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </Section>
      </Background>
    );
  }
}

export default withRouter(LoginPage);

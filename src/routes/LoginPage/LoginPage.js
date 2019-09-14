import React, { Component } from "react";
import { Section } from "../../Components/Utils/Utils";
import { withRouter } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";

class LoginPage extends Component {
  // get the user_id a
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = userId => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || `/${userId}/inventory`; // added USERID params here
    history.push({ pathname: destination, state: userId });
  };

  render() {
    return (
      <Section className="LoginPage">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    );
  }
}

export default withRouter(LoginPage);

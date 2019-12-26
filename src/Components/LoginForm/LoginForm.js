import React, { Component } from "react";
import { Button, Input, Form } from "../Utils/Utils";
import { NavLink, withRouter } from "react-router-dom";
import "./LoginForm.css";
import AuthApiService from "../../services/auth-api-service";
import logo from "../../images/logo.png";
import loading from "../../images/35.gif";
import TokenService from "../../services/token-service";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null, isLoading: false };

  handleSubmitBasicAuth = event => {
    event.preventDefault();
    this.setState({ error: null, isLoading: true });
    const { username, password } = event.target;
    // Retrieves jwt payload.
    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        // Payload is parsed and read for user id.
        const tokenDecoded = TokenService.readJwtToken(res);
        username.value = "";
        password.value = "";
        this.setState({ isLoading: false });
        this.props.onLoginSuccess(tokenDecoded.id);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error, isLoading } = this.state;

    return (
      <Form className="LoginForm" onSubmit={this.handleSubmitBasicAuth}>
        <div className="header_login">
          <img src={logo} alt="stocked logo" className="logo_login"></img>
        </div>
        {isLoading && (
          <div className="container_loader">
            <img src={loading} alt="loading gif" className="loading_gif"></img>
          </div>
        )}
        <div className="user_name">
          <label htmlFor="LoginForm__user_name" className="label_login">
            Username
          </label>
          <Input required name="username" id="LoginForm__user_name" />
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password" className="label_login">
            Password
          </label>
          <Input
            required
            name="password"
            type="password"
            id="LoginForm__password"
            autoComplete="off"
          />
        </div>
        <div role="alert" className="alert_login">
          {error && <p className="red">{error}</p>}
        </div>
        <div className="login_register_container">
          <Button role="button" type="submit">
            Login
          </Button>
          <p className="message_redirect">
            Not a member?{" "}
            <NavLink
              to="/register"
              role="navigation"
              className="btn_register_link"
            >
              Register here.
            </NavLink>
          </p>
        </div>
      </Form>
    );
  }
}

export default withRouter(LoginForm);

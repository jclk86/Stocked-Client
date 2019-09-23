import React, { Component } from "react";
import { Button, Input, Form } from "../Utils/Utils";
import { NavLink, withRouter } from "react-router-dom";
import "./LoginForm.css";
import AuthApiService from "../../services/auth-api-service";
import logo from "../../images/logo.png";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitBasicAuth = event => {
    event.preventDefault();
    this.setState({ error: null });
    const { username, password } = event.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        const user = res.id;
        username.value = "";
        password.value = "";
        this.props.onLoginSuccess(user.id);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <Form className="LoginForm" onSubmit={this.handleSubmitBasicAuth}>
        <div className="header_login">
          <img src={logo} alt="stocked logo" className="logo_login"></img>
        </div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name" className="label_login">
            User name
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

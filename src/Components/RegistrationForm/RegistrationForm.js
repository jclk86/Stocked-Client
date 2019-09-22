import React, { Component } from "react";
import { Button, Input, Required, Form } from "../Utils/Utils";
import { NavLink, withRouter } from "react-router-dom";
import "./RegistrationForm.css";
import AuthApiService from "../../services/auth-api-service";
import {
  ValidationError,
  validatePassword,
  validateEmail
} from "../ValidationError/ValidationError";
import logo from "../../images/logo.png";

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      password: { value: "", touched: false },
      email: { value: "", touched: false }
    };
  }

  updatePassword = password => {
    this.setState({ password: { value: password, touched: true } });
  };

  updateEmail = email => {
    this.setState({ email: { value: email, touched: true } });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { fullname, password, username, email } = event.target;
    this.setState({ error: null, password: password, email: email });

    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      fullname: fullname.value,
      email: email.value
    })
      .then(user => {
        fullname.value = "";
        username.value = "";
        password.value = "";
        email.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error, password, email } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="header_register">
          <img src={logo} alt="stocked logo" className="register_logo"></img>
          <h2>Registration</h2>
        </div>
        <div className="fullname">
          <label
            htmlFor="RegistrationForm__fullname"
            className="label_registration"
          >
            Full name <Required />
          </label>
          <Input
            name="fullname"
            type="text"
            required
            id="RegistrationForm__fullname"
          />
        </div>
        <div className="user_name">
          <label
            htmlFor="RegistrationForm__username"
            className="label_registration"
          >
            User name <Required />
          </label>
          <Input
            name="username"
            type="text"
            required
            id="RegistrationForm__username"
          />
        </div>
        <div className="password">
          <label
            htmlFor="RegistrationForm__password"
            className="label_registration"
          >
            Password <Required />
          </label>
          <Input
            onChange={e => this.updatePassword(e.target.value)}
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          />
          {password.touched && (
            <ValidationError message={validatePassword(password.value)} />
          )}
        </div>
        <div className="email">
          <label
            htmlFor="RegistrationForm__email"
            className="label_registration"
          >
            Email
            <Required />
          </label>{" "}
          <Input
            onChange={e => this.updateEmail(e.target.value)}
            name="email"
            type="text"
            required
            id="RegistrationForm__email"
          />
          {email.touched && (
            <ValidationError message={validateEmail(email.value)} />
          )}
        </div>
        <div className="register_btn_container">
          <Button type="submit">Submit</Button>
        </div>
        <div className="login_link">
          <p className="message_redirect">
            Already a user?{" "}
            <NavLink to={"/login"} role="navigation" className="btn_login_link">
              Login
            </NavLink>
          </p>
        </div>
      </Form>
    );
  }
}

export default withRouter(RegistrationForm);

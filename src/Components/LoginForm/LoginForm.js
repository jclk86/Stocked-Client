import React, { Component } from "react";
import { Button, Input, Form, Logo } from "../Utils/Utils";
import { Link } from "react-router-dom";
import "./LoginForm.css";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  render() {
    return (
      <Form>
        <div className="header_login">
          <Logo></Logo>
          <h2>STOCKED</h2>
        </div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name" className="label_login">
            User name
          </label>
          <Input required name="user_name" id="LoginForm__user_name" />
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
        <div className="login_register_container">
          <Button role="button" type="submit">
            Login
          </Button>
          <p>
            Not a member? <Link to="/register">Register here.</Link>
          </p>
        </div>
      </Form>
    );
  }
}

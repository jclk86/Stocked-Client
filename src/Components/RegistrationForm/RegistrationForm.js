import React, { Component } from "react";
import { Button, Input, Required, Form } from "../Utils/Utils";
import { NavLink } from "react-router-dom";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  render() {
    return (
      <Form>
        <div className="header_register">
          <h2>Registration</h2>
        </div>
        <div className="full_name">
          <label
            htmlFor="RegistrationForm__full_name"
            className="label_registration"
          >
            Full name <Required />
          </label>
          <Input
            name="full_name"
            type="text"
            required
            id="RegistrationForm__full_name"
          />
        </div>
        <div className="user_name">
          <label
            htmlFor="RegistrationForm__user_name"
            className="label_registration"
          >
            User name <Required />
          </label>
          <Input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
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
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          />
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
            name="email"
            type="text"
            required
            id="RegistrationForm__email"
          />
        </div>
        <div className="register_btn_container">
          <Button type="submit">Submit</Button>
        </div>
        <div className="login_link">
          <p>
            Already a user? <NavLink to={"/login"}>Login</NavLink>
          </p>
        </div>
      </Form>
    );
  }
}

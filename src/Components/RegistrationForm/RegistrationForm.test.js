import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RegistrationForm from "./RegistrationForm";
import sinon from "sinon";

describe(`Registration Form`, () => {
  it("Renders registration form without issues", () => {
    const wrapper = shallow(<RegistrationForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("fires submit", () => {
    const handleSubmitSpy = sinon.spy();
    const cb = () => {
      wrapper.find(".Form").simulate("submit");
    };
    const wrapper = mount(
      <BrowserRouter>
        <RegistrationForm onSubmit={handleSubmitSpy}></RegistrationForm>
      </BrowserRouter>
    );
    wrapper.setState({
      password: { value: "Password123!", touched: true },
      cb
    });
  });
});

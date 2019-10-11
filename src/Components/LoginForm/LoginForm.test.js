import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoginForm from "./LoginForm";
import sinon from "sinon";
import AuthApiService from "../../services/auth-api-service";

describe(`LoginForm Component`, () => {
  let mockData = {
    username: "Pop123",
    password: "Password123!",
    fullname: "Bob Smith",
    email: "BSmith@gmail.com"
  };

  beforeAll(() => {
    AuthApiService.postUser(mockData).then(user => {
      AuthApiService.postLogin({
        username: user.username,
        password: user.password
      });
    });
  });

  it("Renders an LoginForm without issue", () => {
    const wrapper = shallow(<LoginForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("fires submit", () => {
    const handleSubmitSpy = sinon.spy();
    const wrapper = mount(
      <BrowserRouter>
        <LoginForm onSubmit={handleSubmitSpy}></LoginForm>
      </BrowserRouter>
    );
    wrapper.find(".Form").simulate("submit", {
      target: { username: mockData.username, password: mockData.password },
      preventDefault: () => {}
    });
  });
});

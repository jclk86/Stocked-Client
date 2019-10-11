import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AddItemForm from "./AddItemForm";
import sinon from "sinon";
import AuthApiService from "../../services/auth-api-service";
import InventoryApiService from "../../services/inventory-api-service";
import TokenService from "../../services/token-service";

describe(`AddItemForm Component`, () => {
  let username;
  let token;
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
      }).then(authToken => {
        console.log(authToken);
      });
    });
  });

  it("Renders an AddItemForm without issue", () => {
    const wrapper = shallow(<AddItemForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("fires submit", () => {
    const handleSubmitSpy = sinon.spy();
    const wrapper = mount(
      <BrowserRouter>
        <AddItemForm onSubmit={handleSubmitSpy}></AddItemForm>
      </BrowserRouter>
    );
    wrapper.find(".Form").simulate("submit");
  });
});

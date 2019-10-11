import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import EditItemForm from "./EditItemForm";
import sinon from "sinon";
import AuthApiService from "../../services/auth-api-service";

describe(`EdItemForm Component`, () => {
  let mockUser = {
    username: "Pop123",
    password: "Password123!",
    fullname: "Bob Smith",
    email: "BSmith@gmail.com"
  };
  let mockItem = {
    name: "item1",
    quantity: 2,
    tag: "Dairy",
    image_url:
      "https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    desc: "item desc",
    unit: "lbs",
    cost_per_unit: 1.99
  };

  beforeAll(() => {
    AuthApiService.postUser(mockUser).then(user => {
      AuthApiService.postLogin({
        username: user.username,
        password: user.password
      });
    });
  });

  it("Renders an EditItemForm without issue", () => {
    const wrapper = shallow(<EditItemForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("fires submit", () => {
    const handleSubmitSpy = sinon.spy();
    const wrapper = mount(
      <BrowserRouter>
        <EditItemForm onSubmit={handleSubmitSpy}></EditItemForm>
      </BrowserRouter>
    );
    wrapper.find(".Form").simulate("submit", {
      target: {
        name: mockItem.name,
        quantity: mockItem.quantity,
        tag: mockItem.tag,
        image_url: mockItem.image_url,
        desc: mockItem.desc,
        unit: mockItem.unit,
        cost_per_unit: mockItem.cost_per_unit
      },
      preventDefault: () => {}
    });
  });
});

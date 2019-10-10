import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AddItemForm from "./AddItemForm";
import sinon from "sinon";

describe(`AddItemForm Component`, () => {
  it("Renders an AddItemForm without issue", () => {
    const wrapper = shallow(<AddItemForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("fires submit", () => {
    jest.mock("jwt-decode"); // fix this
    const handleSubmitSpy = sinon.spy();
    const wrapper = mount(
      <BrowserRouter>
        <AddItemForm onSubmit={handleSubmitSpy}></AddItemForm>
      </BrowserRouter>
    );
    wrapper.find(".Form").simulate("submit");
  });
});

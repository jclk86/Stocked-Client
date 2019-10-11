import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import EditItemForm from "./EditItemForm";
import sinon from "sinon";

describe(`EdItemForm Component`, () => {
  it("Renders an EditItemForm without issue", () => {
    const wrapper = shallow(<EditItemForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("fires submit", () => {
    // jest.mock("jwt-decode"); // fix this
    const handleSubmitSpy = sinon.spy();
    const wrapper = mount(
      <BrowserRouter>
        <EditItemForm onSubmit={handleSubmitSpy}></EditItemForm>
      </BrowserRouter>
    );
    wrapper.find(".Form").simulate("submit");
  });
});

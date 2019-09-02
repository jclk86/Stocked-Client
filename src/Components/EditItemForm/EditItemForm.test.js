import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import EditItemForm from "./EditItemForm";
import sinon from "sinon";

describe(`EditItemForm Component`, () => {
  it("fires submit", () => {
    const handleSubmitSpy = sinon.spy();
    const wrapper = mount(
      <BrowserRouter>
        <EditItemForm onSubmit={handleSubmitSpy}></EditItemForm>
      </BrowserRouter>
    );
    wrapper.find(".Form").simulate("submit");
  });
});

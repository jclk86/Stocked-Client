import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import AddItemForm from "./AddItemForm";
import sinon from "sinon";

describe(`AddItemForm Component`, () => {
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

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AddItemForm from "./AddItemForm";

import { Form, Input, Button, Textarea } from "../Utils/Utils";
import sinon from "sinon";

//spy on addinventtoryuitem from context
describe(`AddItemForm Component`, () => {
  const item = {
    item_name_value: "steak",
    quantity: 1,
    date: new Date(),
    tag: 1,
    image:
      "https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "This is steak",
    unit: 2,
    cost: 3.99
  };
  it("triggers submit", () => {
    const handleSubmitSpy = sinon.spy();
    const wrapper = mount(
      <BrowserRouter>
        <AddItemForm onSubmit={handleSubmitSpy}></AddItemForm>
      </BrowserRouter>
    );
    wrapper.find(".Form").simulate("submit", item);
  });
});

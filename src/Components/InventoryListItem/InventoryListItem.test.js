import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import InventoryListItem from "./InventoryListItem";
import InventoryContext from "../../context/InventoryContext";

describe(`InventoryListItem Component`, () => {
  const contextType = InventoryContext;
  const item = {
    itemId: 1
  };
  it("renders inventory list without issue", () => {
    const wrapper = shallow(
      <InventoryListItem value={contextType} item={item}></InventoryListItem>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

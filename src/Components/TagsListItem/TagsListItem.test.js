import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import TagListItem from "./TagsListItem";
import InventoryContext from "../../context/InventoryContext";

describe(`TagsListItem Component`, () => {
  const tag = {
    tagId: 1
  };

  it("renders tags without issues", () => {
    const wrapper = shallow(<TagListItem tag={tag}></TagListItem>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

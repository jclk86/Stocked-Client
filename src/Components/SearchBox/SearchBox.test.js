import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import sinon from "sinon";
import SearchBox from "./SearchBox";

describe(`SearchBox Component`, () => {
  const handleChangeSpy = sinon.spy();
  it("Renders SearchBox without issue", () => {
    const wrapper = shallow(<SearchBox />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("filters inventory list based on user input", () => {
    const wrapper = mount(<SearchBox onChange={handleChangeSpy}></SearchBox>);
    const event = { target: { name: "search_filter", value: "Apple" } };
    wrapper.find("input").simulate("change", event);
  });
});

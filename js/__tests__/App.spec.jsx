import React from "react";
import { shallow } from "enzyme";
import App from "../App";

test("App renders correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

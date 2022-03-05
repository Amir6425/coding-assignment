import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App"


it("renders without crashing", () => {
  shallow(<App />);
});

it("renders page header", () => {
  const wrapper = shallow(<App />);
  const header = <h3>Prime Number Checker</h3>;
  expect(wrapper.contains(header)).toEqual(true);
});

it("renders page paragraph", () => {
  const wrapper = shallow(<App />);
  const header = <p>Enter an integer or 1 to n integers. Use comma to separate integers</p>;
  expect(wrapper.contains(header)).toEqual(true);
});


import React from "react";
import { shallow, mount } from "enzyme";
import Number from "./Number"

it("renders without crashing", () => {
  shallow(<Number />);
});


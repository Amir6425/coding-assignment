import React from "react";
import { shallow } from "enzyme";
import Number from "./Number"

it("renders without crashing", () => {
  shallow(<Number />);
});


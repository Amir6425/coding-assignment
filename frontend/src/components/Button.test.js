import React from "react";
import { shallow, mount } from "enzyme";
import Button from "./Button";

it("renders without crashing", () => {
  shallow(<Button />);
});
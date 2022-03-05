import React from "react";
import { shallow, mount } from "enzyme";
import Form from "./Form"

it("renders without crashing", () => {
  shallow(<Form />);
});
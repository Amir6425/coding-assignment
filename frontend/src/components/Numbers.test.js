import React from "react";
import { shallow, mount } from "enzyme";
import Numbers from "./Numbers"

it("renders without crashing", () => {
  shallow(<Numbers />);
});
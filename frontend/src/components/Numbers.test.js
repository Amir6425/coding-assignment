import React from "react";
import { shallow } from "enzyme";
import Numbers from "./Numbers"

it("renders without crashing", () => {
  shallow(<Numbers />);
});
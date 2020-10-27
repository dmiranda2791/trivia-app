import React from "react";
import renderer from "react-test-renderer";

import { Index } from "../index";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

import React from "react";
import { render } from "@testing-library/react-native";

import { Komp } from "./index";

describe("<Komp />", () => {
  it("komp 1 child", () => {
    const { getAllByText } = render(<Komp />);
    const bananaElements = getAllByText("Test");
    expect(bananaElements).toHaveLength(1);
  });
});

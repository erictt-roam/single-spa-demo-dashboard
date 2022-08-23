import { render } from "@testing-library/react";
import React from "react";

import Card from "./Card";

describe("Card", () => {
  it("should render the component with the expected `children`", () => {
    const text = "Demo text";
    const { getByText } = render(<Card>{text}</Card>);
    expect(getByText(text)).toBeInTheDocument();
  });
});

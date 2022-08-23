import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Demo Dashboard")).toBeInTheDocument();
  });
});

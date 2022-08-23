import { render } from "@testing-library/react";
import React from "react";

import Root from "./root.component";

jest.mock("single-spa-react/parcel");

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByTestId } = render(<Root />);
    expect(getByTestId("rootSection")).toBeInTheDocument();
  });
});

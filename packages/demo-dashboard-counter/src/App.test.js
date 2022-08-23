import App from "./App.svelte";
import { render } from "@testing-library/svelte";

it("renders the App component", async () => {
  const testId = "appContainer";
  const { getByTestId } = render(App);
  expect(getByTestId(testId)).toBeInTheDocument();
});

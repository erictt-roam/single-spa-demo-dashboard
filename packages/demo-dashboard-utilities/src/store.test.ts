import store from "./store";

describe("store", () => {
  it("should return an initial value of `0`", () => {
    expect(store.counter).toBe(0);
  });

  it("should  return the expected counter when `incrementCounter` is called", () => {
    expect(store.counter).toBe(0);

    store.incrementCounter();

    expect(store.counter).toBe(1);
  });

  it("should subscribe and get the expected counter whenever the `incrementCounter` is called", () => {
    let counter = store.counter;

    store.subscribe(() => {
      counter = store.counter;
    });

    store.incrementCounter();
    store.incrementCounter();

    // Expect `3` because `incrementCounter` was called once in the previous test.
    expect(counter).toBe(3);
  });
});

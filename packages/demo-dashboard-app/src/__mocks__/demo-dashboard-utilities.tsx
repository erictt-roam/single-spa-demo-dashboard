import React from "react";

const createStore = () => {
  let counter = 0;
  const subscribers = [];

  return {
    // @ts-ignore
    get counter() {
      return counter;
    },
    incrementCounter() {
      counter += 1;
      subscribers.forEach((fn) => fn());
    },
    subscribe(fn) {
      subscribers.push(fn);
    },
  };
};

export const store = createStore();

export const Card = ({ children }) => <div>{children}</div>;

const createStore = () => {
  let counter = 0;
  const subscribers = [];

  return {
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

const store = createStore();

export default store;

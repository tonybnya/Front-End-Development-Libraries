import React from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const incAction = () => {
  return {
    type: INCREMENT,
  };
};

const decAction = () => {
  return {
    type: DECREMENT,
  };
};

const store = Redux.createStore(counterReducer);

// Testing
console.log(store.getState()); // Output: 0

store.dispatch(incAction());
console.log(store.getState()); // Output: 1

store.dispatch(decAction());
console.log(store.getState()); // Output: 0

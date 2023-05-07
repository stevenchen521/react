import store from "./store.js";
import {
  increment,
  decrement,
  increment_by_amt,
  decrement_by_amt,
} from "./actions.js";
import counterReducer from "./reducer.js";

// Log the initial state
console.log("Initial State:", store.getState());

// Subscribe to store updates and log the new state
const unsubscribe = store.subscribe(() =>
  console.log("Updated State:", store.getState())
);

// Dispatch some actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment_by_amt(2));
store.dispatch(decrement());
store.dispatch(decrement_by_amt(4));

console.log(counterReducer({ count: 10 }, increment));

// Unsubscribe from store updates
unsubscribe();

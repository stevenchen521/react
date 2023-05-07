const { createStore } = require("redux");
const yourReducer = require("./features/counter/counterSlice.js");

// Replace this with your action creators or action objects.
// const testActions = [
//   { type: "ACTION_TYPE_1", payload: "payload_1" },
//   { type: "ACTION_TYPE_2", payload: "payload_2" },
// ];

// Create a Redux store with your reducer.
const store = createStore(yourReducer);

// Subscribe to store updates and log the new state.
store.subscribe(() => console.log(store.getState()));

// Dispatch the test actions.
// testActions.forEach((action) => store.dispatch(action));

const store = require('./store');
const { increment, decrement } = require('./actions');

// Log the initial state
console.log('Initial State:', store.getState());

// Subscribe to store updates and log the new state
const unsubscribe = store.subscribe(() => console.log('Updated State:', store.getState()));

// Dispatch some actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

// Unsubscribe from store updates
unsubscribe();
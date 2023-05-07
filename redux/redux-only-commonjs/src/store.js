const { createStore } = require('redux');
const counterReducer = require('./reducer');

const store = createStore(counterReducer);

module.exports = store;
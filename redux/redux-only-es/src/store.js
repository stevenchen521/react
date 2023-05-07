import pkg from "@reduxjs/toolkit";
import counterReducer from "./reducer.js";

const { configureStore } = pkg;

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

// store.js
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const posts = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "LIKE_POST":
      // Update the 'likes' property of the post with the given ID
      return state.map((post) =>
        post.id === action.id ? { ...post, likes: post.likes + 1 } : post
      );
    case "ADD_COMMENT":
      // Add a comment to the post with the given ID
      return state.map((post) =>
        post.id === action.id
          ? { ...post, comments: [...post.comments, action.comment] }
          : post
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({ posts });

const store = configureStore({
  reducer: rootReducer,
});

export default store;

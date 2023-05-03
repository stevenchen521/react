// store.js
import { createStore, combineReducers } from 'redux';

const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.post];
    case 'LIKE_POST':
      // Update the 'likes' property of the post with the given ID
      return state.map((post) =>
        post.id === action.id ? { ...post, likes: post.likes + 1 } : post
      );
    case 'ADD_COMMENT':
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
const store = createStore(rootReducer);

export default store;

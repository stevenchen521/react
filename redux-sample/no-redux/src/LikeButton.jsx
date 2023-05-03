// LikeButton.js
import React from 'react';

const LikeButton = ({ postId, onLike }) => {
  return <button onClick={() => onLike(postId)}>Like</button>;
};

export default LikeButton;

/* eslint-disable react/prop-types */
// LikeButton.js

const LikeButton = ({ postId, onLike }) => {
  return <button onClick={() => onLike(postId)}>Like</button>;
};

export default LikeButton;

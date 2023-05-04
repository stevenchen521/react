/* eslint-disable react/prop-types */
// LikeButton.js
import { useDispatch } from 'react-redux';

const LikeButton = ({ postId }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch({ type: 'LIKE_POST', id: postId });
  };

  return <button onClick={handleLike}>Like</button>;
};

export default LikeButton;

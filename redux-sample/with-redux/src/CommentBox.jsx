import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CommentBox = ({ postId }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_COMMENT', id: postId, comment });
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='Write a comment'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default CommentBox;

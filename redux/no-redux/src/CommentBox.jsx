// CommentBox.js
import React, { useState } from 'react';

const CommentBox = ({ postId, onComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onComment(postId, comment);
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

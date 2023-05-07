/* eslint-disable react/prop-types */
import { useState } from 'react';

const Post = ({ addComment, onLike, post }) => {
  const [comment, setComment] = useState('');

  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Likes: {post.likes}</p>
      <button
        onClick={() => {
          onLike(post.id);
        }}
      >
        Like
      </button>
      <h4>Comments</h4>
      <ul>
        {post.comments.map((comment, index) => {
          return <li key={index}>{comment}</li>;
        })}
      </ul>
      <input
        type='text'
        placeholder='Write a comment'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <button
        onClick={() => {
          addComment(post.id, comment);
          setComment('');
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Post;

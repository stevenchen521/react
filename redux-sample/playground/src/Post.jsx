import { useState } from "react";

const Post = ({ id, title, content, likes, comments, addComment }) => {
  const [comment, setComment] = useState("");

  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Likes: {likes}</p>
      <button>Like</button>
      <h4>Comments</h4>
      <ul>
        {comments.map((comment, index) => {
          return <li key={index}>{comment}</li>;
        })}
      </ul>
      <input
        type="text"
        placeholder="Write a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <button
        onClick={(e) => {
          addComment(id, comment);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Post;

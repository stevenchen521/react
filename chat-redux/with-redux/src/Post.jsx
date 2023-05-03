// Post.jsx
import React from 'react';
import LikeButton from './LikeButton';
import CommentBox from './CommentBox';

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Likes: {post.likes}</p>
      <LikeButton postId={post.id} />
      <div>
        <h4>Comments:</h4>
        <ul>
          {post.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <CommentBox postId={post.id} />
      </div>
    </div>
  );
};

export default Post;

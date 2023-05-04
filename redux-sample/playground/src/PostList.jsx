import React from "react";
import Post from "./Post";

const PostList = ({ posts, addComment }) => {
  return posts.map((post) => {
    return (
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        content={post.content}
        likes={post.likes}
        comments={post.comments}
        addComment={addComment}
      />
    );
  });
};

export default PostList;

/* eslint-disable react/prop-types */
// PostsList.js
import Post from './Post';

const PostsList = ({ posts, onLike, onComment }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={onLike} onComment={onComment} />
      ))}
    </div>
  );
};

export default PostsList;

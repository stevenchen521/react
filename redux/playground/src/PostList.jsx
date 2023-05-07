import Post from './Post';

const PostList = ({ posts, addComment, onLike }) => {
  return posts.map((post) => {
    return (
      <Post key={post.id} post={post} addComment={addComment} onLike={onLike} />
    );
  });
};

export default PostList;

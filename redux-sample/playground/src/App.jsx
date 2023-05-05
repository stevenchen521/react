import {useEffect, useState} from 'react';
import PostList from './PostList';

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [posts, setPosts] = useState([
    {
      id: Date.now() + 1,
      title: 'title1',
      content: 'content1',
      likes: 0,
      comments: ['comment11', 'comment12', 'comment13'],
    },
    {
      id: Date.now() + 2,
      title: 'title2',
      content: 'content2',
      likes: 0,
      comments: ['comment21', 'comment22', 'comment23'],
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: title,
      content: content,
      likes: 0,
      comments: [],
    };

    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
  }

  function addComment(postId, comment) {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId)
        return { ...post, comments: [...post.comments, comment] };
      return post;
    });

    setPosts(updatedPosts);
  }

  function onLike(postId) {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  }

  return (
    <>
      <h1>Social Media App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type='submit'>Add Post</button>
      </form>
      <PostList posts={posts} addComment={addComment} onLike={onLike} />
    </>
  );
};

export default App;

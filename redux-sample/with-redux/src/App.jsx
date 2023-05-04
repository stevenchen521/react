// App.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PostsList from './PostsList';

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      content,
      likes: 0,
      comments: [],
    };

    dispatch({ type: 'ADD_POST', post: newPost });

    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h1>Social Media App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
        <button type='submit'>Add Post</button>
      </form>
      <PostsList />
    </div>
  );
};

export default App;

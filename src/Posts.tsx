import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from './types';
import PostItem from './PostItem';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleDeletePost = (id:number) => {
    setPosts(
      posts.filter((post) => post.id !== id)
    );
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')
    .then(({data}) => {
      setPosts(data);
    });
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => <PostItem key={post.id} id={post.id} title={post.title} handleDelete={handleDeletePost} />)}
      </ul>
    </div>
  );
}

export default Posts;
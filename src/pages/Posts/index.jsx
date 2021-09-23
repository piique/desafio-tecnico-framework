import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserPosts from '../../components/UserPosts';
import api from '../../services/api';

import './styles.scss';

const Posts = () => {
  const users = useSelector((state) => state.users);

  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    return api.get('posts').then((response) => response.data);
  };

  useEffect(() => {
    getPosts().then((_posts) => {
      setPosts(_posts);
    });
  }, []);

  return (
    <div className="Posts">
      <h1>Postagens</h1>
      <div className="container">
        {
          users.map((user) => (
            <UserPosts
              id={user.id}
              name={user.name}
              posts={posts.filter((post) => post.userId === user.id)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Posts;

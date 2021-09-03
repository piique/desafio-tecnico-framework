import React, { useEffect, useState } from 'react';
import UserPosts from '../../components/UserPosts';
import api from '../../services/api';

import './styles.scss';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return api.get('users').then((response) => response.data);
  };

  const getPosts = () => {
    return api.get('posts').then((response) => response.data);
  };

  useEffect(() => {
    Promise.all([getUsers(), getPosts()]).then(([_users, _posts]) => {
      setUsers(_users);
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

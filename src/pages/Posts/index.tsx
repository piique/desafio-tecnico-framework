import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserPosts from '../../components/UserPosts';
import api from '../../services/api';
import { RootState } from '../../store';

import './styles.scss';

const Posts: React.FunctionComponent = () => {
  const users = useSelector((state: RootState) => state.user.users);

  const [posts, setPosts] = useState<Post[]>([]);

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
          users && users.map((user: User) => (
            <UserPosts
              id={user.id}
              key={user.id}
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

import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import UserAlbums from '../../components/UserAlbums';

import './styles.scss';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return api.get('users').then((response) => response.data);
  };

  const getAlbums = () => {
    return api.get('albums').then((response) => response.data);
  };

  useEffect(() => {
    Promise.all([getUsers(), getAlbums()]).then(([_users, _albums]) => {
      setUsers(_users);
      setAlbums(_albums);
    });
  }, []);

  return (
    <div className="Albums">
      <h1>Álbuns</h1>
      <div className="container">
        {
          users.map((user) => (
            <UserAlbums
              id={user.id}
              name={user.name}
              albums={albums.filter((album) => album.userId === user.id)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Albums;

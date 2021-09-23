import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';

import UserAlbums from '../../components/UserAlbums';

import './styles.scss';

const Albums = () => {
  const users = useSelector((state) => state.users);

  const [albums, setAlbums] = useState([]);

  const getAlbums = () => {
    return api.get('albums').then((response) => response.data);
  };

  useEffect(() => {
    getAlbums().then((_albums) => {
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

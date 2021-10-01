import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import UserAlbums from '../../components/UserAlbums';

import './styles.scss';
import {  useSelector } from 'react-redux';
import { RootState } from '../../store';

// type Albums = Array<Album>

const Albums: React.FunctionComponent = () => {
  const users = useSelector((state: RootState) => { console.log(state) ;return state.user.users});

  const [albums, setAlbums] = useState<Album[]>([]);

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
          users && users.map((user: User) => (
            <UserAlbums
              id={user?.id}
              key={user?.id}
              name={user?.name}
              albums={albums.filter((album) => album?.userId === user.id)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Albums;

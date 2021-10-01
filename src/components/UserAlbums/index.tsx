import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

type Props = {
  id: number | undefined,
  name: string | undefined,
  albums: Array<Album> 
}

const UserAlbums: React.FunctionComponent<Props> = ({ id, name, albums }: Props) => {
  return (
    <div key={id} className="UserAlbums">
      <div className="title">
        {name}
      </div>
      <div className="user-albums">
        {
          albums.map((album) => (
            <div key={`${id}${album.id}`} className="album">
              {album.title}
            </div>
          ))
        }
      </div>
    </div>
  );
};

// UserAlbums.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   albums: PropTypes.arrayOf(PropTypes.object),
// };

// UserAlbums.defaultProps = {
//   albums: [],
// };

export default UserAlbums;

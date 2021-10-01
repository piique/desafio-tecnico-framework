import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

type Props = {
  id: number | undefined,
  name: string | undefined,
  posts: Array<Post> 
}


const UserPosts: React.FunctionComponent<Props> = ({ id, name, posts }:Props) => {
  return (
    <div key={id} className="UserPosts">
      <div className="title">
        {name}
      </div>
      <div className="user-posts scroll">
        {
          posts.map((post) => (
            <div key={`${id}${post.id}`} className="post">
              <div className="post-title">
                {`Título: ${post.title}`}
              </div>
              <p className="post-body">
                {`Texto: ${post.body}`}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

// UserPosts.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   posts: PropTypes.arrayOf(PropTypes.object),
// };

// UserPosts.defaultProps = {
//   posts: [],
// };

export default UserPosts;

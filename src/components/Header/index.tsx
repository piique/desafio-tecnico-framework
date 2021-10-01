import React from 'react';
// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import './styles.scss';

type Props = {
  menuItems: Array<MenuItem>
}

const Header: React.FunctionComponent<Props> = ({ menuItems }: Props) => {
  const { pathname: location } = useLocation();
  return (
    <header className="Header">
      <div className="container">
        <h1>Desafio Técnico</h1>
        <ul className="menu-container">
          {
            menuItems.map((menuItem) => (
              <li key={menuItem.path} className="menu-item">
                <Link style={{ fontWeight: location === menuItem.path ? 'bold' : 'normal' }} to={menuItem.path}>
                  {menuItem.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  );
};

// Header.propTypes = {
//   menuItems: PropTypes.arrayOf(PropTypes.object),
// };
  
// Header.defaultProps = {
//   menuItems: [],
// };

export default Header;

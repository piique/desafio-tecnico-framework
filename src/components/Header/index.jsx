import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import './styles.scss';

const Header = ({ menuItems }) => {
  const { pathname: location } = useLocation();
  return (
    <header className="Header">
      <div className="container">
        <h1>Desafio Técnico</h1>
        <ul className="menu-container">
          {
            menuItems.map((menuItem) => (
              <li className="menu-item">
                <Link style={{ fontWeight: location === menuItem.path ? 'bold' : false }} to={menuItem.path}>{ menuItem.title }</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  menuItems: [],
};

export default Header;

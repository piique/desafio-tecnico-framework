import React from 'react';
// import PropTypes from 'prop-types';

import Header from '../../components/Header';
import './styles.scss';

type Props = {
  children: React.ReactNode,
  menuItems: Array<MenuItem>
}

const MainLayout: React.FunctionComponent<Props> = ({ children, menuItems } : Props) => {
  return (
    <div className="MainLayout">
      <Header menuItems={menuItems} />
      <div className="page">
        <div className="page-container">
          {children}
        </div>
      </div>
    </div>
  );
};

// MainLayout.propTypes = {
//   children: PropTypes.node.isRequired,
//   menuItems: PropTypes.arrayOf(PropTypes.object),
// };

// MainLayout.defaultProps = {
//   menuItems: [],
// };

export default MainLayout;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { renderLeftItem, renderRightItem } from '../header-paths/HeaderPaths';

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="item-right">{renderRightItem(location)}</div>
      <h1>Restaurant</h1>
      <div className="item-left">{renderLeftItem(location)}</div>
    </div>
  );
};

export default Header;
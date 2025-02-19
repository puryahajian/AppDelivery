import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import '../header/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faArrowLeft, faSignIn } from '@fortawesome/free-solid-svg-icons';

export const renderRightItem = (location) => {
  if (location.pathname === '/' || 
      location.pathname === '/cart') 
      {
    return <>logo</>;
  } else if (location.pathname === '/profile' ||
            location.pathname === '/edit-profile'
  ) {
    // return (
    //   <Link to='/login'>
    //     <a href="#">
    //       <button className="btn-Login">
    //         <FontAwesomeIcon icon={faSignIn} />
    //       </button>
    //     </a>
    //   </Link>
    // )
  } else if (location.pathname === '/list-menu') {
    return (
      <p>logo</p>
    );
  }
  return null;
};

export const renderLeftItem = (location) => {
  if (location.pathname === '/') {
    return (
      <a href="#">
        <Link to='/cart'>
          {/* <Badge count={5}> */}
            <button className="btn-offcanvas">
              {/* <FontAwesomeIcon icon={faShoppingBag} /> */}
            </button>
          {/* </Badge> */}
        </Link>
      </a>
    );
  }
  if (location.pathname === '/list-menu' || 
      location.pathname === '/profile' || 
      location.pathname === '/cart') 
      {
    return (
      <Link to="/">
        <button className="btn-backTo-Home">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
    );
  } else if (location.pathname === '/edit-profile') {
    return (
      <Link to="/profile">
        <button className="btn-backTo-Home">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
    );
  }
  return null;
};
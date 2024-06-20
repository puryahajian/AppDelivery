import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../menu/Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';

function Menu() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const currentIndex = menuItems.findIndex(item => item.link === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location]);

  const menuItems = [
    { icon: faUser, link: '/profile' },
    { icon: faShoppingBag, link: '/cart' },
    { icon: faHome, link: '/' },
  ];

  return (
    <div className="menu-bottom">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`list ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <Link to={item.link}>
              <span className="icon">
                <FontAwesomeIcon icon={item.icon} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';

const NavList = (props) => {
  const [items, setItems] = useState();

  const colorLink = (selectedItem) => {
    debugger;
  };

  useEffect(() => {
    setItems(
      props.items.map((item) => (
        <NavLink name={item.name} icon={item.icon} isActive={item.isActive} colorLink={colorLink} />
      ))
    );
  }, []);

  return <div className='nav__list'>{items}</div>;
};

export default NavList;

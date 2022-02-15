import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import NavMenu from './NavMenu';

const NavList = (props) => {
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(
      props.items.map((item) =>
        item.items ? (
          <NavMenu name={item.name} icon={item.icon} items={item.items} />
        ) : (
          <NavLink name={item.name} icon={item.icon} />
        )
      )
    );
  }, []);

  return <div className="nav__list">{items}</div>;
};

export default NavList;

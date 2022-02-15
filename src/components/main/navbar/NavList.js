import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import NavMenu from './NavMenu';

const NavList = (props) => {
  const [items, setItems] = useState();

  const colorLink = (selectedItem) => {};
  const navigate = (event) => {
    props.navigate(event);
  };

  useEffect(() => {
    setItems(
      props.items.map((item) =>
        item.items ? (
          <NavMenu name={item.name} icon={item.icon} items={item.items} navigate={navigate} />
        ) : (
          <NavLink name={item.name} icon={item.icon} navigate={navigate} />
        )
      )
    );
  }, []);

  return <div className="nav__list">{items}</div>;
};

export default NavList;

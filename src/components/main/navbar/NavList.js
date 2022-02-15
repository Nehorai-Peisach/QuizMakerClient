import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';

const NavList = (props) => {
  const [items, setItems] = useState();

  const colorLink = (selectedItem) => {
    // debugger;
  };
  const navigate=(event)=>{
    props.navigate(event)
  }
  useEffect(() => {
    setItems(
      props.items.map((item,index) => (
        <NavLink name={item.name} key={index} icon={item.icon} navigate={navigate} isActive={item.isActive} colorLink={colorLink} />
      ))
    );
  }, []);

  return <div className='nav__list'>{items}
  <button style={{"width" : "300px"}} onClick={navigate}>click</button>
  </div>;
};

export default NavList;

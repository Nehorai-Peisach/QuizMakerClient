import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import NavMenu from './NavMenu';

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
//  useEffect(() => {
//    setItems(
//      props.items.map((item) =>
//        item.items ? (
//         <NavMenu name={item.name} icon={item.icon} items={item.items} />
//        ) : (
//          <NavLink name={item.name} icon={item.icon} />
//       )
//      )
//   );
//  }, []);

  return <div className='nav__list'>{items}
  </div>;

};

export default NavList;

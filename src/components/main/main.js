import { useState } from 'react';
import NavBar from './navbar/NavBar';

const Main = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [navClass, setNavClass] = useState('nav-bar');
  const [CompClass, setCompClass] = useState('main-component');

  const navHandler = () => {
    setIsActive((preState) => {
      preState = !preState;
      preState ? setNavClass('nav-bar nav-expander') : setNavClass('nav-bar');
      preState ? setCompClass('main-component comp-expander') : setCompClass('main-component');
      return preState;
    });
  };

  return (
    <div cla>
      <NavBar className={navClass} navHandler={navHandler} />
      <div className={CompClass}>{props.children}</div>
    </div>
  );
};
export default Main;


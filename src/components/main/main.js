import { useState } from 'react';
import NavBar from './navbar/NavBar';
import Login from './Login';

const Main = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [navClass, setNavClass] = useState('nav-bar');
  const [CompClass, setCompClass] = useState('main-component');

  const navHandler = (isTrue) => {
    setIsActive((preState) => {
      isTrue == true ? (preState = true) : (preState = !preState);
      preState ? setNavClass('nav-bar nav-expander') : setNavClass('nav-bar');
      preState ? setCompClass('main-component comp-expander') : setCompClass('main-component');
      return preState;
    });
  };
  const navigate = (event) => {
    props.navigate(event);
  };

  return (
    <div>
      {props.user ? (
        <div>
          <NavBar className={navClass} navHandler={navHandler} navigate={navigate} isActive={isActive} />
          <div className={CompClass}>{props.children}</div>
        </div>
      ) : (
        <Login LogedIn={props.setUser} />
      )}
    </div>
  );
};
export default Main;

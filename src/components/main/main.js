import { useState } from 'react';
import NavBar from './navbar/NavBar';

const Main = (props) => {

  return (
    <div>
      <div className='l-navbar' id='navbar'>
        <nav className='nav'>
          <div>
            <div className='nav__brand'>
              <ion-icon name='menu-outline' className='nav__toggle' id='nav-toggle'></ion-icon>
              <a href='#' className='nav__logo'>
                Bedimcode
              </a>
            </div>
            <div className='nav__list'>
              <a href='#' className='nav__link active'>
                <ion-icon name='home-outline' className='nav__icon'></ion-icon>
                <span className='nav__name'>Dashboard</span>
              </a>
              <a href='#' className='nav__link'>
                <ion-icon name='chatbubbles-outline' className='nav__icon'></ion-icon>
                <span className='nav__name'>Messenger</span>
              </a>

              <div className='nav__link collapse'>
                <ion-icon name='folder-outline' className='nav__icon'></ion-icon>
                <span className='nav__name'>Projects</span>

                <ion-icon name='chevron-down-outline' className='collapse__link'></ion-icon>

                <ul className='collapse__menu'>
                  <a href='#' className='collapse__sublink'>
                    Data
                  </a>
                  <a href='#' className='collapse__sublink'>
                    Group
                  </a>
                  <a href='#' className='collapse__sublink'>
                    Members
                  </a>
                </ul>
              </div>

              <a href='#' className='nav__link'>
                <ion-icon name='pie-chart-outline' className='nav__icon'></ion-icon>
                <span className='nav__name'>Analytics</span>
              </a>
              <div className='nav__link collapse'>
                <ion-icon name='people-outline' className='nav__icon'></ion-icon>
                <span className='nav__name'>Team</span>

                <ion-icon name='chevron-down-outline' className='collapse__link'></ion-icon>

                <ul className='collapse__menu'>
                  <a href='#' className='collapse__sublink'>
                    Data
                  </a>
                  <a href='#' className='collapse__sublink'>
                    Group
                  </a>
                  <a href='#' className='collapse__sublink'>
                    Members
                  </a>
                </ul>
              </div>
              <a href='#' className='nav__link'>
                <ion-icon name='settings-outline' className='nav__icon'></ion-icon>
                <span className='nav__name'>Settings</span>
              </a>
            </div>
          </div>

          <a href='#' className='nav__link'>
            <ion-icon name='log-out-outline' className='nav__icon'></ion-icon>
            <span className='nav__name'>Log Out</span>
          </a>
        </nav>
      </div>

      <h1>Componentes</h1>
      <script src='https://unpkg.com/ionicons@5.1.2/dist/ionicons.js'></script>

      <script src='assets/js/main.js'></script>
=======
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


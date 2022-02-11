import 'boxicons';
import MenuItem from './menuItem';
import SubMenuItem from './subMenuItem';

const Main = (props) => {
  return (
    <div>
      <div class='l-navbar' id='navbar'>
        <nav class='nav'>
          <div>
            <div class='nav__brand'>
              <ion-icon name='menu-outline' class='nav__toggle' id='nav-toggle'></ion-icon>
              <a href='#' class='nav__logo'>
                Bedimcode
              </a>
            </div>
            <div class='nav__list'>
              <a href='#' class='nav__link active'>
                <ion-icon name='home-outline' class='nav__icon'></ion-icon>
                <span class='nav__name'>Dashboard</span>
              </a>
              <a href='#' class='nav__link'>
                <ion-icon name='chatbubbles-outline' class='nav__icon'></ion-icon>
                <span class='nav__name'>Messenger</span>
              </a>

              <div class='nav__link collapse'>
                <ion-icon name='folder-outline' class='nav__icon'></ion-icon>
                <span class='nav__name'>Projects</span>

                <ion-icon name='chevron-down-outline' class='collapse__link'></ion-icon>

                <ul class='collapse__menu'>
                  <a href='#' class='collapse__sublink'>
                    Data
                  </a>
                  <a href='#' class='collapse__sublink'>
                    Group
                  </a>
                  <a href='#' class='collapse__sublink'>
                    Members
                  </a>
                </ul>
              </div>

              <a href='#' class='nav__link'>
                <ion-icon name='pie-chart-outline' class='nav__icon'></ion-icon>
                <span class='nav__name'>Analytics</span>
              </a>
              <div class='nav__link collapse'>
                <ion-icon name='people-outline' class='nav__icon'></ion-icon>
                <span class='nav__name'>Team</span>

                <ion-icon name='chevron-down-outline' class='collapse__link'></ion-icon>

                <ul class='collapse__menu'>
                  <a href='#' class='collapse__sublink'>
                    Data
                  </a>
                  <a href='#' class='collapse__sublink'>
                    Group
                  </a>
                  <a href='#' class='collapse__sublink'>
                    Members
                  </a>
                </ul>
              </div>
              <a href='#' class='nav__link'>
                <ion-icon name='settings-outline' class='nav__icon'></ion-icon>
                <span class='nav__name'>Settings</span>
              </a>
            </div>
          </div>

          <a href='#' class='nav__link'>
            <ion-icon name='log-out-outline' class='nav__icon'></ion-icon>
            <span class='nav__name'>Log Out</span>
          </a>
        </nav>
      </div>

      <h1>Componentes</h1>
      <script src='https://unpkg.com/ionicons@5.1.2/dist/ionicons.js'></script>

      <script src='assets/js/main.js'></script>
    </div>
  );
};
export default Main;

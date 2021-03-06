import { VscEllipsis, VscHome, VscFile, VscInspect, VscPieChart, VscSignOut } from 'react-icons/vsc';
import NavBrand from './NavBrand';
import NavList from './NavList';
import NavBot from './NavBot';

const brand = { name: 'QuizMaker', icon: VscEllipsis };
const list = [
  { name: 'Home', icon: VscHome },
  {
    name: 'Quizes',
    icon: VscFile,
    items: [
      { name: 'Manage Quizes', link: '#' },
      { name: 'Create Quiz', link: '#' },
    ],
  },
  {
    name: 'Qustions',
    icon: VscInspect,
    items: [
      { name: 'Manage Questions', link: '#' },
      { name: 'Create Question', link: '#' },
    ],
  },
  {
    name: 'Reports',
    icon: VscPieChart,
    items: [
      { name: 'Report By Quiz', link: '#' },
      { name: 'Report By Student', link: '#' },
    ],
  },
];
const bot = { name: 'Log Out', icon: VscSignOut };
const NavBar = (props) => {
  const botClick = () => props.setUser();
  const navigate = (event) => {
    props.navigate(event);
  };
  return (
    <div className={props.className}>
      <nav className="nav">
        <NavBrand name={brand.name} icon={brand.icon} navHandler={props.navHandler} />
        <div className="nav__container">
          <NavList items={list} navigate={navigate} navHandler={props.navHandler} isActive={props.isActive} />
          <NavBot name={bot.name} icon={bot.icon} onClick={botClick} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

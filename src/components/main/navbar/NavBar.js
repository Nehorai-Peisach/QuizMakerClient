import NavBrand from './NavBrand';
import NavList from './NavList';
import NavBot from './NavBot';

const brand = { name: 'QuizMaker', icon: 'menu-outline' };
const list = [
  { name: 'Home', icon: 'home-outline', isActive: true },
  { name: 'Quizes', icon: 'document-text-outline', isActive: false },
  { name: 'Qustions', icon: 'list-circle-outline', isActive: false },
  { name: 'Reports', icon: 'stats-chart-outline', isActive: false },
];
const bot = { name: 'Log Out', icon: 'log-out-outline' };

const NavBar = (props) => {

  const navigate=(event)=>{
    props.navigate(event)
  }
  return (
    <div className={props.className}>
      <nav className='nav'>
        <NavBrand name={brand.name} icon={brand.icon} navHandler={props.navHandler} />
        <div className='nav__container'>
          <NavList items={list} navigate={navigate}/>
          <NavBot name={bot.name} icon={bot.icon} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

const NavBot = (props) => {
  return (
    <a href={props.link} className='nav__link nav__bot'>
      <ion-icon name={props.icon} class ='nav__icon' />
      <span className='nav__name'>{props.name}</span>
    </a>
  );
};

export default NavBot;

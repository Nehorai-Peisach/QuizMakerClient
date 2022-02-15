const NavLink = (props) => {
  const linkClass = props.isActive ? 'nav__link active' : 'nav__link';

  const navigate=()=>{
    props.navigate(props.name)
  }
  return (
    <a href={props.link} className={linkClass}>
      <ion-icon name={props.icon} class='nav__icon' onClick={() => {props.colorLink(this);navigate();}} />
      <span className='nav__name'>{props.name}</span>

      //<props.icon className="nav__icon" />

    </a>
  );
};

export default NavLink;

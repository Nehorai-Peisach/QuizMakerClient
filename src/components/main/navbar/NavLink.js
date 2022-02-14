const NavLink = (props) => {
  const linkClass = props.isActive ? 'nav__link active' : 'nav__link';
  return (
    <a href={props.link} className={linkClass}>
      <ion-icon name={props.icon} class='nav__icon' onClick={() => props.colorLink(this)} />
      <span className='nav__name'>{props.name}</span>
    </a>
  );
};

export default NavLink;

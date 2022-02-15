const NavLink = (props) => {
  const linkClass = props.isActive ? 'nav__link active' : 'nav__link';

  return (
    <a href={props.link} className={linkClass}>
      <props.icon className="nav__icon" />
      <span className="nav__name">{props.name}</span>
    </a>
  );
};

export default NavLink;
